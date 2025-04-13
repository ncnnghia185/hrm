import { ContractTemplate, ContractStatus } from "../../models/contract/contract_templates.model";
import { CreateContractDTO } from "../../types/contract/contract.dto";

const createNewContract = async (data: CreateContractDTO) => {
    return await ContractTemplate.create(data);
}

const selectAllContracts = async (page: number, limit: number) => {
    const offset = (page - 1) * limit;
    const { count, rows } = await ContractTemplate.findAndCountAll({
        attributes: ['id', 'contract_type_name', 'duration', 'description', 'status'],
        limit: limit,
        offset: offset,
        order: [['createdAt', 'DESC']]
    });
    return {
        total: count,
        page,
        limit,
        totalPages: Math.ceil(count / limit),
        data: rows
    };
}

const selectDetailContract = async (id: string) => {
    return await ContractTemplate.findOne({
        where: { id: id }
    })
}

// const selectContractsByEmployee = async (employeeId: string) => {
//     return await ContractTemplate.findAll({
//         where: { employee_id: employeeId },
//         include: [Employee],
//         order: [['start_date', 'DESC']]
//     })
// }

const updateContract = async (id: string, data: Partial<ContractTemplate>) => {
    return await ContractTemplate.update(data, { where: { id: id } })
}

const updateContractStatus = async (id: string, status: ContractStatus) => {
    return await ContractTemplate.update({ status: status }, { where: { id: id } })
}

const deleteContract = async (id: string) => {
    return await ContractTemplate.destroy({ where: { id: id } })
}

export const ContractServices = {
    createNewContract,
    selectAllContracts,
    selectDetailContract,
    // selectContractsByEmployee,
    updateContract,
    updateContractStatus,
    deleteContract,

}