import { ROUTES } from "@/constant/api.constant";
import { LoginAccountData } from "@/types/fetchAPI/auth";
import { apiClient } from "../interceptor";

const loginAccount = async (data: LoginAccountData) => {
    try {
        const response = await apiClient.post(ROUTES.LOGIN_ACCOUNT, data);
        return response.data;
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
    const response = await apiClient.post(ROUTES.LOGOUT_ACCOUNT, { refreshToken });
    return response.data;
}

const sendMailForgotPassword = async (email: string) => {
    const response = await apiClient.post(ROUTES.SEND_EMAIL_FORGOT_PASSWORD, { email });
    return response.data;
}

const confirmOtpForgotPassword = async (email: string, otp: string) => {
    const response = await apiClient.post(ROUTES.CONFIRM_OTP_ROUTE, { email, otp });
    return response.data;
}

const forgotPassword = async (email: string, otp: string, newPassword: string) => {
    const response = await apiClient.post(ROUTES.FORGOT_PASSWORD_ROUTE, {
        email,
        otp,
        newPassword,
    });
    return response.data;
}
export const AuthServices = {
    loginAccount,
    logoutAccount,
    sendMailForgotPassword,
    confirmOtpForgotPassword,
    forgotPassword
}