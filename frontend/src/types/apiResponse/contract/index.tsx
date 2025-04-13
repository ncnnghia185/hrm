

export type CreateContractResponse = {
    success: boolean,
    errCode: number,
    message: string,
}

export type AllContractsInfor = {
    id: string,
    contract_type_name: string,
    duration: number,
    description: string,
    status: number
}

export type GetAllContractsResponse = {
    success: boolean,
    errCode: number,
    message: string,
    data: {
        contracts: AllContractsInfor[],
        pagination: {
            total: number,
            totalPages: number,
            currentPage: number,
            pageSize: number
        }
    }
}

export type DetailContractInfor = {
    id: string,
    contract_type_name: string,
    duration: number,
    description: string,
    status: number,
    default_salary: number,
    default_allowances: string,
    contract_file_url: string,
    createdAt: string,
    updatedAt: string
}
export type GetDetailContractResponse = {
    success: boolean,
    errCode: number,
    message: string,
    data: DetailContractInfor,
}

export type UpdateContractResponse = {
    success: boolean,
    errCode: number,
    message: string,
    data: string
}
