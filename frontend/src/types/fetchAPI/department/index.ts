export type CreateDepartmentData = {
    id: string,
    name: string,
    description: string | null
}

export type UpdateDepartmentData = {
    name: string | null,
    description: string | null
}