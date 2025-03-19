export type CreateRole = {
    id: string,
    name: string,
    description: string | null
}

export type UpdateRoleData = {
    name: string | null,
    description: string | null
}