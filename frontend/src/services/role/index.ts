import axios from "axios";
import { ROUTES } from "@/constant/api.constant";
import { CreateRole, UpdateRoleData } from "@/types/fetchAPI/role";

export const createRole = async (data: { roleInfor: CreateRole, permissions: string[] }) => {
    const response = await axios.post(ROUTES.CREATE_ROLE_ROUTE, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

export const getAllRoles = async (page: number = 1, limit: number = 10) => {
    const response = await axios.get(ROUTES.GET_ALL_ROLES_ROUTE, {
        params: { page, limit },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

export const getDetailRole = async (id: string) => {
    const response = await axios.get(ROUTES.GET_DETAIL_ROLE_ROUTE(id), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

export const updateRole = async (id: string, data: UpdateRoleData, accessToken?: string) => {
    const response = await axios.put(ROUTES.UPDATE_ROLE_ROUTE(id), data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    })
    return response.data
}

export const removePermissionFromRole = async (roleId: string, permissionId: string, accessToken?: string) => {
    const response = await axios.delete(ROUTES.REMOVE_PERMISSION_ROLE_ROUTE(roleId, permissionId), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    })
    return response.data
}

