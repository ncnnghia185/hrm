import { Pagination } from "@/types/common/pagination"

export type CreateMainPermissionResponse = {
    success: boolean,
    errCode: number,
    message: string
}

export type CreateChildPermissionResponse = {
    success: boolean,
    errCode: number,
    message: string
}

export type mainPermissionData = {
    id: string,
    name: string,
    description: string | null
    createdAt: string
}

export type GetAllMainPermissionResponse = {
    success: boolean,
    errCode: number,
    message: string,
    data: {
        permissions: mainPermissionData[],
        pagination: Pagination
    }
}

export type ChildPermissionData = {
    id: string,
    name: string,
    description: string | null,
    parent_id: string,
    createdAt: string,
    updatedAt: string
}

export type GetChildPermissionsResponse = {
    success: boolean,
    errCode: number,
    message: string,
    data: ChildPermissionData[]
}

export type SearchPermissionDate = {
    id: string,
    name: string,
    description: string | null,
    parent_id: string | null,
    createdAt: string,
    updatedAt: string
}
export type SearchPermissionResponse = {
    success: boolean,
    errCode: number,
    message: string,
    data: SearchPermissionDate[]
}

export type PermissionNode = {
    id: string;
    name: string;
    parent_id: string | null,
    children: PermissionNode[];
}
export type GetPermissionTreeResponse = {
    success: boolean;
    errCode: number;
    message: string;
    data: PermissionNode[];
};

export type UpdatePermissionResponse = {
    success: boolean,
    errCode: number,
    message: string
}

export type DeletePermissionResponse = {
    success: boolean,
    errCode: number,
    message: string
}
