export type CreatePositionData = {
    id: string,
    name: string,
    description: string | null,
    department_id: string
}

export type UpdatePositionData = {
    name: string | null,
    description: string | null
}