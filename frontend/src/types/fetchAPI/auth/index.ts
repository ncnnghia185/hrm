export interface LoginAccountData {
    email: string,
    password: string,
    refreshTokenId: string
}

export interface CreateAccountData {
    email: string,
    password: string,
    role: string
}