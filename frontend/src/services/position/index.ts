import { ROUTES } from "@/constant/api.constant";
import { CreatePositionData } from "@/types/fetchAPI/position";
import { apiClient } from "../interceptor";
export const createPosition = async (data: CreatePositionData) => {
    const response = await apiClient.post(ROUTES.CREATE_POSITION_ROUTE, data);
    return response.data;
}

export const getAllPositions = async (page: number = 1, limit: number = 10) => {
    const response = await apiClient.get(ROUTES.GET_ALL_POSITIONS_ROUTE, {
        params: { page, limit },
    });
    return response.data;
}