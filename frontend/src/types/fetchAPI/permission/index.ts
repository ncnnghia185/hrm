export type CreateMainPermission = {
    id: string,
    name: string,
    description: string | null
}

export type CreateChildPermissionData = {
    id: string,
    name: string,
    description: string | null
}

export type UpdatePermissionData = {
    name: string | null,
    description: string | null
}