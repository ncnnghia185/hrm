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
        params: { page, limit },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

// get main permission infor
export const getMainPermissionInfo = async (id: string) => {
    const response = await axios.get(ROUTES.GET_MAIN_PERMISSION_INFO_ROUTE(id), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

// get child permissions of main permission
export const getChildPermissions = async (parent_id: string) => {
    const response = await axios.get(ROUTES.GET_CHILD_PERMISSION_ROUTE(parent_id), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

// get permission tree
export const getPermissionTree = async (page: number = 1, limit: number = 3) => {
    const response = await axios.get(ROUTES.GET_PERMISSION_TREE_ROUTE, {
        params: { page, limit },
        headers: {
            'Content-Type': 'application/json'
        }
    })
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
    return response.data.data || []
}

// update permission
export const updateMainPermission = async (id: string, data: UpdatePermissionData) => {
    const response = await axios.put(ROUTES.UPDATE_PERMISSION_ROUTE(id), data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

export const updateChildPermission = async (id: string, parent_id: string, data: UpdatePermissionData) => {
    const response = await axios.put(ROUTES.UPDATE_CHILD_PERMISSION_ROUTE(id), { parent_id, ...data }, {
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