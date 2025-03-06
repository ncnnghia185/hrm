import axios from "axios";
import { ROUTES } from "@/constant/api.constant";
import { CreateRole } from "@/types/fetchAPI/role";

export const createRole = async (data: { roleInfor: CreateRole, permissions: string[] }) => {
    const response = await axios.post(ROUTES.CREATE_ROLE_ROUTE, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}