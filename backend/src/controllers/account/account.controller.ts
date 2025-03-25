import { Request, Response } from "express";
import { AccountServices } from "../../services/account/account.services";
import { responseHandler } from "../../utils/response_handler";
import { Account } from "../../models/account/account.model";
import { generateAccessToken, generateRefreshToken } from "../../utils/generate_token";
import { PasswordReset, Permission, RefreshToken, Role } from "../../models";
import { comparePassword, hashPassword } from "../../utils/hash_password";
import { generateRandomId } from "../../utils/generate_id";
import sendResetPasswordEmail from "../../configs/nodemailer.config";
import sequelize from "../../configs/database.config";
import jwt from "jsonwebtoken";
import configEnv from "../../configs/env.config";

const createNewAccount = async (req: Request, res: Response) => {
    try {
        const { id, email, password, employeeId } = req.body;
        if (!id || !email || !password) {
            responseHandler(res, false, 400, 2, "Thiếu các thông tin bắt buộc", null);
            return;
        }
        const existedAccount = await AccountServices.checkExistedAccount(id, email);
        if (existedAccount) {
            responseHandler(res, false, 400, 3, "Tài khoản này đã tồn tại", null);
            return;
        }
        const hashesPassword = await hashPassword(password)
        await AccountServices.createAccount(id, email, hashesPassword, employeeId)
        responseHandler(res, true, 201, 0, "Tạo tài khoản thành công", null);
    } catch (error) {
        responseHandler(res, false, 500, 1, String(error), null);
        return;
    }
}

const loginAccount = async (req: Request, res: Response) => {
    try {
        const { email, password, refreshTokenId } = req.body
        if (!email || !password) {
            responseHandler(res, false, 400, 2, "Thiếu thông tin đăng nhập", null);
            return
        }
        const user = await Account.findOne({
            where: { email },
            include: [
                {
                    model: Role,
                    as: "roles",
                    include: [
                        {
                            model: Permission,
                            as: "permissions",
                            attributes: ["name"],
                            through: { attributes: [] }
                        }
                    ]
                }
            ]
        });
        if (!user) {
            responseHandler(res, false, 400, 1001, "Tài khoản này không tồn tại", null);
            return
        } else {
            const isMatchPassword = await comparePassword(password, user.password)
            if (!isMatchPassword) {
                responseHandler(res, false, 400, 1002, "Mật khẩu không chính xác", null);
                return
            }
            const roles = user.roles ? user.roles.map((role: any) => role.name) : [];
            const permissions = user.roles
                .flatMap((role: any) => role.permissions.map((perm: any) => perm.name))
                .filter((value: any, index: any, self: any) => self.indexOf(value) === index);
            const accessToken = generateAccessToken(user.id, roles, permissions);
            const refreshToken = generateRefreshToken(user.id);
            await RefreshToken.destroy({ where: { account_id: user.id } });
            const expiresAt = new Date();
            expiresAt.setDate(expiresAt.getDate() + 7);
            await RefreshToken.create({ id: refreshTokenId, account_id: user.id, token: refreshToken, expires_at: expiresAt } as any);

            responseHandler(res, true, 200, 0, "Đăng nhập thành công",
                { accessToken, refreshToken, userData: { id: user.id, email: user.email, role: roles } }
            );
            return
        }
    } catch (error) {
        responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null);
        return;
    }
}

const logoutAccount = async (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) { responseHandler(res, false, 400, 2, "Missing required fields", null); return }

        await RefreshToken.destroy({ where: { token: refreshToken } });
        responseHandler(res, true, 201, 0, "Đăng xuất tài khoản thành công", null);
    } catch (error) {
        responseHandler(res, false, 500, 1, String(error), null);
        return
    }
};

const sendMailChangePassword = async (req: Request, res: Response) => {
    try {
        const { email } = req.body
        // check account of email
        const checkAccount = await Account.findOne({ where: { email: email } })
        if (!checkAccount) {
            responseHandler(res, false, 400, 1001, "Email này không tồn tại trong hệ thống", null);
            return;
        }
        // generate reset password id
        const resetPasswordId = generateRandomId("RPWID")
        // generate reset password token
        const resetPasswordToken = generateRandomId("RPWTK")

        await PasswordReset.create({
            id: resetPasswordId,
            account_id: checkAccount.id,
            otp: resetPasswordToken,
            expires_at: new Date(Date.now() + 1000 * 60 * 60 * 1),
            is_used: false
        } as any)

        // send mail to user
        await sendResetPasswordEmail(email, resetPasswordToken)

        responseHandler(res, true, 200, 0, "Mã xác nhận đã được gửi tới  email của bạn", null)
        return
    } catch (error) {
        responseHandler(res, false, 500, 1, String(error), null);
        return
    }
}

const confirmOTPForgotPassword = async (req: Request, res: Response) => {
    try {
        const { email, otp } = req.body
        const checkAccount = await Account.findOne({ where: { email: email } })
        if (!checkAccount) {
            responseHandler(res, false, 400, 1001, "Email này không tồn tại trong hệ thống", null);
            return;
        }
        // Check token otp
        const checkOTP = await PasswordReset.findOne({ where: { account_id: checkAccount.id, otp: otp } })
        if (!checkOTP) {
            responseHandler(res, false, 400, 1002, "Mã xác nhận không đúng", null);
            return;
        }
        // Check expired token
        if (checkOTP.expires_at < new Date()) {
            responseHandler(res, false, 400, 1003, "Mã xác nhận đã hết hạn", null);
            return;
        }

        if (checkOTP.is_used) {
            responseHandler(res, false, 400, 1004, "Mã xác nhận đã sử dụng", null);
            return;
        }

        // update is_used to true
        checkOTP.is_used = true
        await checkOTP.save()
        responseHandler(res, true, 201, 0, "Xác thực mã thành công", null)
        return
    } catch (error) {
        responseHandler(res, false, 500, 1, String(error), null);
        return
    }
}

const forgotPassword = async (req: Request, res: Response) => {
    const transaction = await sequelize.transaction()
    try {
        const { email, otp, newPassword } = req.body;
        // Check token otp 
        const checkOTP = await PasswordReset.findOne({ where: { otp: otp }, transaction })
        if (!checkOTP) {
            responseHandler(res, false, 200, 2, "Mã xác thực sai. Vui lòng thử lại", null)
            return
        }
        // Check expired token
        if (checkOTP.expires_at < new Date()) {
            responseHandler(res, false, 400, 3, "Mã xác nhận đã hết hạn", null);
            return;
        }
        // Hash new password
        const hashedPassword = await hashPassword(newPassword)
        // Update password
        await Account.update({ password: hashedPassword }, { where: { email: email }, transaction })

        const user = await Account.findOne({ where: { email: email }, transaction })
        if (user) {
            await PasswordReset.destroy({ where: { account_id: user.id, otp: otp } })
        }
        await transaction.commit();
        responseHandler(res, true, 200, 0, "Đổi mật khẩu thành công", null)
    } catch (error) {
        responseHandler(res, false, 500, 1, String(error), null);
    }
}

const refreshToken = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return responseHandler(res, false, 400, 2, "Missing refresh token", null);
    }
    try {
        const decoded = jwt.verify(refreshToken, configEnv.jwt_secret) as { id: string };
        console.log("check decoded", decoded)
        const storedToken = await RefreshToken.findOne({ where: { account_id: decoded.id, token: refreshToken } });
        if (!storedToken || storedToken.expires_at < new Date()) {
            return responseHandler(res, false, 401, 3, "Refresh token hết hạn hoặc không đúng", null);
        }
        const user = await Account.findOne({
            where: { id: decoded.id },
            include: [
                {
                    model: Role,
                    as: "roles",
                    include: [
                        {
                            model: Permission,
                            as: "permissions",
                            attributes: ["name"],
                            through: { attributes: [] }
                        }
                    ]
                }
            ]
        });
        if (user) {
            const roles = user.roles ? user.roles.map((role: any) => role.name) : [];
            const permissions = user.roles
                .flatMap((role: any) => role.permissions.map((perm: any) => perm.name))
                .filter((value: any, index: any, self: any) => self.indexOf(value) === index);
            const accessToken = generateAccessToken(user.id, roles, permissions);
            return responseHandler(res, true, 200, 0, "Refresh token thành công", accessToken);
        }
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error), null);
    }
}
export const accountController = {
    createNewAccount,
    loginAccount,
    logoutAccount,
    sendMailChangePassword,
    confirmOTPForgotPassword,
    forgotPassword,
    refreshToken
}