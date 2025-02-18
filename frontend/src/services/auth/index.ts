import axios from "axios";
import BASE_URL  from "@/constant/api.constant";

const loginAccount = async (data:any) => {
    const response = await axios.post(`${BASE_URL}/owner/login-account`, data, {
	})
	
	return response.data
}

export const AuthServices = {
    loginAccount
}