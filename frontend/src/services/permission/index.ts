import axios from "axios";
import { ROUTES } from "@/constant/api.constant";
import { CreateChildPermissionData, CreateMainPermission, UpdatePermissionData } from "@/types/fetchAPI/permission";

// create new main permission
export const createMainPermission = async (data: CreateMainPermission) => {
    const response = await axios.post(ROUTES.CREATE_PERMISSION_ROUTE, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

// create new child permission
export const createNewChildPermission = async (parent_id: string, permissions: CreateChildPermissionData[]) => {
    const response = await axios.post(ROUTES.CREATE_CHILD_PERMISSION_ROUTE, { parent_id, permissions }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

// get all main permissions
export const getAllMainPermissions = async (page: number = 1, limit: number = 3) => {
    const response = await axios.get(ROUTES.GET_MAIN_PERMISSION_ROUTE, {
        params: { page, limit }
    })
    return response.data
}

// get child permissions of main permission
export const getChildPermissions = async (parent_id: string) => {
    const response = await axios.get(ROUTES.GET_CHILD_PERMISSION_ROUTE(parent_id))
    return response.data
}

// search the permission
export const searchPermission = async (query: string) => {
    const response = await axios.post(ROUTES.SEARCH_PERMISSION_ROUTE, {
        query
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

// update permission
export const updatePermission = async (id: string, data: UpdatePermissionData) => {
    const response = await axios.put(ROUTES.UPDATE_PERMISSION_ROUTE(id), { data }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

// delete permission
export const deletePermission = async (id: string) => {
    const response = await axios.delete(ROUTES.DELETE_PERMISSION_ROUTE(id))
    return response.data
}