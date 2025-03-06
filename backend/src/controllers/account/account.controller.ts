import { Request, Response } from "express";
import { AccountServices } from "../../services/account/account.services";
import { responseHandler } from "../../utils/response_handler";
import { Account } from "../../models/account/account.model";
import { generateAccessToken, generateRefreshToken } from "../../utils/generate_token";
import { Permission, RefreshToken, Role } from "../../models";
const createNewAccount = async (req: Request, res: Response) => {
    try {
        const { id, email, password, full_name } = req.body;
        if (!id || !email || !password) {
            responseHandler(res, false, 400, 2, "Missing required fields", null);
            return;
        }
        const existedAccount = await AccountServices.checkExistedAccount(id, email);
        if (existedAccount) {
            responseHandler(res, false, 400, 3, "Account already exists", null);
            return;
        }
        await AccountServices.createAccount(id, email, password, full_name)
        responseHandler(res, true, 201, 0, "Successfully", null);
    } catch (error) {
        responseHandler(res, false, 500, 1, String(error), null);
        return;
    }
}


const loginAccount = async (req: Request, res: Response) => {
    try {
        const { email, password, refreshTokenId } = req.body
        if (!email || !password) {
            responseHandler(res, false, 400, 2, "Missing required fields", null);
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
        } else {
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

            responseHandler(res, true, 200, 0, "Đăng nhập thành công", { accessToken, refreshToken });
        }
    } catch (error) {
        responseHandler(res, false, 500, 1, String(error), null);
        return;
    }
}

const logoutAccount = async (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) responseHandler(res, false, 400, 2, "Missing required fields", null);

        await RefreshToken.destroy({ where: { token: refreshToken } });
        responseHandler(res, true, 201, 0, "Đăng xuất tài khoản thành công", null);
    } catch (error) {
        responseHandler(res, false, 500, 1, String(error), null);
    }
};
export const accountController = {
    createNewAccount,
    loginAccount,
    logoutAccount
}