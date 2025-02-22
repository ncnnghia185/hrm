import { Response } from "express"

export const responseHandler = (res: Response, success: boolean, statusCode: number, errCode: number, message: string, data = null) => {
    const response: { success: boolean, errCode: number, message: string, data?: any } = {
        success,
        errCode,
        message
    }
    if (data !== null) response.data = data

    res.status(statusCode).json(response)
}