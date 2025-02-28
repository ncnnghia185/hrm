import { Request, Response } from "express";
import { AccountServices } from "../../services/account/account.services";
import { responseHandler } from "../../utils/response_handler";

const createNewAccount = async (req: Request, res: Response) => {
    try {
        const { id, email, password, role_id } = req.body;
        if (!id || !email || !password || role_id) {
            responseHandler(res, false, 400, 2, "Missing required fields", null);
            return;
        }
        const existedAccount = await AccountServices.checkExistedAccount(id, email);
        if (existedAccount) {
            responseHandler(res, false, 400, 3, "Account already exists", null);
            return;
        }

        responseHandler(res, true, 201, 0, "Successfully", null);
    } catch (error) {
        responseHandler(res, false, 500, 1, "Server Error", null);
        return;
    }
}

export const accountController = {
    createNewAccount,
}