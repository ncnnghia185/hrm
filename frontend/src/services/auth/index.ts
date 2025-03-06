import axios from "axios";
import { ROUTES } from "@/constant/api.constant";

const loginAccount = async (data: any) => {
    const response = await axios.post(ROUTES.LOGIN_ACCOUNT, data, {
    })

    return response.data
}

export const AuthServices = {
    loginAccount
}