import { ROUTES } from "@/constant/api.constant";
import { CreateContractData, UpdateContractData } from "@/types/fetchAPI/contract";
import { apiClient } from "../interceptor";
export const createContract = async (data: CreateContractData) => {
    const response = await apiClient.post(ROUTES.CREATE_CONTRACT_ROUTE, data);
    return response.data;
}

export const getAllContracts = async (page: number = 1, limit: number = 10) => {
    const response = await apiClient.get(ROUTES.GET_ALL_CONTRACTS_ROUTE, {
        params: { page, limit },
    });
    return response.data;
}

export const getDetailContract = async (id: string) => {
    const response = await apiClient.get(ROUTES.GET_DETAIL_CONTRACT_ROUTE(id))
    return response.data
}

export const updateContract = async (id: string, updateData: UpdateContractData) => {
    const response = await apiClient.put(ROUTES.UPDATE_CONTRACT_ROUTE(id), updateData)
    return response.data
}