import { DepartmentInfor } from "../department"

export type CreatePositionResponse = {
    success: boolean,
    errCode: number,
    message: string,
}

export type PositionInfor = {
    id: string,
    name: string,
    description: string,
    department: DepartmentInfor
}

export type GetAllPositionsResponse = {
    success: boolean,
    errCode: number,
    message: string,
    data: {
        positions: PositionInfor[],
        pagination: {
            total: number,
            totalPages: number,
            currentPage: number,
            pageSize: number
        }
    }
}