export type CreateContractData = {
    id: string;
    contract_type_name: string;
    duration: number | null;
    description: string | null;
    default_salary: number | null;
    default_allowances: string | null;
    contract_file_url: string | null;
    status: number | null;
    notice_period_days: number | null;
}

export type UpdateContractData = Partial<{
    contract_type_name: string;
    duration: number;
    description: string;
    default_salary: number;
    default_allowances: string;
    contract_file_url: string;
    status: number;
    notice_period_days: number;
}>;