import axios from "axios";
import { ROUTES } from "@/constant/api.constant";
import { LoginAccountData } from "@/types/fetchAPI/auth";

const loginAccount = async (data: LoginAccountData) => {
    try {
        const response = await axios.post(ROUTES.LOGIN_ACCOUNT, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return response.data
    } catch (error: any) {
        if (error.response) {
            return error.response.data;
        }
        return {
            success: false,
            errCode: -1,
            message: "Lỗi kết nối đến server",
            data: null,
        };
    }

}

const logoutAccount = async (refreshToken: string) => {
    const response = await axios.post(ROUTES.LOGOUT_ACCOUNT, { refreshToken: refreshToken }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

const sendMailForgotPassword = async (email: string) => {
    const response = await axios.post(ROUTES.SEND_EMAIL_FORGOT_PASSWORD, { email: email }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

const confirmOtpForgotPassword = async (email: string, otp: string) => {
    const response = await axios.post(ROUTES.CONFIRM_OTP_ROUTE, { email: email, otp: otp }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

const forgotPassword = async (email: string, otp: string, newPassword: string) => {
    const response = await axios.post(ROUTES.FORGOT_PASSWORD_ROUTE, { email: email, otp: otp, newPassword: newPassword }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}
export const AuthServices = {
    loginAccount,
    logoutAccount,
    sendMailForgotPassword,
    confirmOtpForgotPassword,
    forgotPassword
}