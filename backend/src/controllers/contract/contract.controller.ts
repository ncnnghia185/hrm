import { ContractServices } from "../../services/contract/contract.services";
import { Request, Response } from "express";
import { responseHandler } from "../../utils/response_handler";
import { CreateContractDTO, UpdateContractDTO } from "../../types/contract/contract.dto";
import { ContractStatus } from "../../models/contract/employee_contract.model";

const createContract = async (req: Request, res: Response) => {
    try {
        const data: CreateContractDTO = req.body;
        await ContractServices.createNewContract(data);
        return responseHandler(res, true, 201, 0, "Tạo hợp đồng thành công", null);
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null)
    }
}

const getAllContracts = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const allContracts = await ContractServices.selectAllContracts(page, limit);
        const allContractsData = {
            contracts: allContracts.data,
            pagination: {
                total: allContracts.total,
                totalPages: allContracts.totalPages,
                currentPage: allContracts.page,
                pageSize: allContracts.limit,
            }
        }
        return responseHandler(res, true, 200, 0, "Lấy danh sách hợp đồng thành công", allContractsData);
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null);
    }
}

const getDetailContract = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const contract = await ContractServices.selectDetailContract(id);
        if (!contract) return responseHandler(res, false, 404, 2, "Không tìm thấy hợp đồng", null);
        return responseHandler(res, true, 200, 0, "Lấy hợp đồng thành công", contract);
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null);
    }
};

const updateContractInfo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data: UpdateContractDTO = req.body;
        const updatedContract = await ContractServices.updateContract(id, data);
        if (!updatedContract) return responseHandler(res, false, 404, 2, "Không tìm thấy hợp đồng", null);
        return responseHandler(res, true, 201, 0, "Cập nhật hợp đồng thành công", null);
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null);
    }
};

const deleteContractInfo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleted = await ContractServices.deleteContract(id);
        if (!deleted) return responseHandler(res, false, 404, 2, "Không tìm thấy hợp đồng", null);
        return responseHandler(res, true, 201, 0, "Xóa hợp đồng thành công", null);
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null);
    }
};

const updateContractStatusInfo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (!Object.values(ContractStatus).includes(status)) {
            return responseHandler(res, false, 400, 3, "Trạng thái hợp đồng không hợp lệ", null);
        }
        const updatedContract = await ContractServices.updateContractStatus(id, status);
        if (!updatedContract) return responseHandler(res, false, 404, 2, "Không tìm thấy hợp đồng", null);
        return responseHandler(res, true, 200, 0, "Cập nhật trạng thái hợp đồng thành công", updatedContract);
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null);
    }
};

// const getContractsByEmployee = async (req: Request, res: Response) => {
//     try {
//         const { employeeId } = req.params;
//         const contracts = await ContractServices.selectContractsByEmployee(employeeId);
//         return responseHandler(res, true, 200, 0, "Lấy danh sách hợp đồng theo nhân viên thành công", contracts);
//     } catch (error) {
//         return responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null);
//     }
// };

export const ContractController = {
    createContract,
    getAllContracts,
    getDetailContract,
    updateContractInfo,
    deleteContractInfo,
    updateContractStatusInfo,
    // getContractsByEmployee
}