export class AppError extends Error {
    statusCode: number;
    errCode: number;

    constructor(message: string, statusCode: number, errCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.errCode = errCode;
    }
}
