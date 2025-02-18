export interface LoginAccountResponse{
    errCode:number;
    message:string;
    data: {
        token: string;
        role: string;
        userId: number;
    }
}