export type LoginAccountResponse = {
    success: boolean;
    errCode: number;
    message: string;
    data: {
        accessToken: string,
        refreshToken: string,
        userData: {
            id: string,
            email: string,
            role: string[]
        }
    }
}

export type LogoutAccountResponse = {
    success: boolean;
    errCode: number;
    message: string;
}

export type SendForgotPasswordEmailResponse = {
    success: boolean;
    errCode: number;
    message: string;
}

export type ConfirmOTPResponse = {
    success: boolean;
    errCode: number,
    message: string
}

export type ForgotPasswordResponse = {
    success: boolean;
    errCode: number,
    message: string;
}