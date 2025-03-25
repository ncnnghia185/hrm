import { ROUTES } from "@/constant/api.constant";
import { CreateDepartmentData, UpdateDepartmentData } from "@/types/fetchAPI/department";
import { apiClient } from "../interceptor";
export const createDepartment = async (data: CreateDepartmentData) => {
    const response = await apiClient.post(ROUTES.CREATE_DEPARTMENT_ROUTE, data);
    return response.data;
}

export const getAllDepartments = async (page: number = 1, limit: number = 10) => {
    const response = await apiClient.get(ROUTES.GET_ALL_DEPARTMENTS_ROUTE, {
        params: { page, limit },
    });
    return response.data;
}

// export const getDetailRole = async (id: string) => {
//     const response = await axios.get(ROUTES.GET_DETAIL_ROLE_ROUTE(id), {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     return response.data
// }

// export const updateRole = async (id: string, data: UpdateDepartmentData, accessToken?: string) => {
//     const response = await axios.put(ROUTES.UPDATE_ROLE_ROUTE(id), data, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${accessToken}`
//         }
//     })
//     return response.data
// }

// export const removePermissionFromRole = async (roleId: string, permissionId: string, accessToken?: string) => {
//     const response = await axios.delete(ROUTES.REMOVE_PERMISSION_ROLE_ROUTE(roleId, permissionId), {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${accessToken}`
//         }
//     })
//     return response.data
// }

