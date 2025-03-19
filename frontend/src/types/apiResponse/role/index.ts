import { PermissionInfo } from "@/types/apiResponse/permission";
export type CreateRoleResponse = {
    success: boolean,
    errCode: number,
    message: string,
}

export type RoleInfor = {
    id: string,
    name: string,
    description: string
}
export type GetListRoleResponse = {
    success: boolean,
    errCode: number,
    message: string,
    data: {
        roles: RoleInfor[],
        pagination: {
            total: number,
            totalPages: number,
            currentPage: number,
            pageSize: number
        }
    }
}

export type DetailRoleInfo = {
    id: string,
    name: string,
    description: string,
    permissions: PermissionInfo[]
}
export type GetDetailRoleResponse = {
    success: boolean,
    errCode: number,
    message: string,
    data: DetailRoleInfo
}

export type ChangeRoleResponse = {
    success: boolean,
    errCode: number,
    message: string,
}