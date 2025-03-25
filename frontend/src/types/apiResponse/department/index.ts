export type CreateDepartmentResponse = {
    success: boolean,
    errCode: number,
    message: string,
}

export type DepartmentInfor = {
    id: string,
    name: string,
    description: string
}

export type GetAllDepartmentsResponse = {
    success: boolean,
    errCode: number,
    message: string,
    data: {
        departments: DepartmentInfor[],
        pagination: {
            total: number,
            totalPages: number,
            currentPage: number,
            pageSize: number
        }
    }
}