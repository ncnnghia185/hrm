import { PositionServices } from "../../services/position/position.services";
import { Request, Response } from "express";
import { responseHandler } from "../../utils/response_handler";

const createPosition = async (req: Request, res: Response) => {
    try {
        const { id, name, department_id } = req.body
        if (!id || !name || !department_id) {
            return responseHandler(res, false, 400, 2, "Thông tin chức vụ không hợp lệ", null);
        }
        const existedPosition = await PositionServices.checkPositionByName(id)
        if (existedPosition) {
            return responseHandler(res, false, 409, 3, "Chức vụ này đã tồn tại", null)
        }
        await PositionServices.createNewPosition(req.body)
        return responseHandler(res, true, 201, 0, "Tạo mới chức vụ thành công", null)
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null)
    }
}

const getAllPositions = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const allPositions = await PositionServices.selectAllPositions(page, limit)
        const allPositionsData = {
            positions: allPositions.data,
            pagination: {
                total: allPositions.total,
                totalPages: allPositions.totalPages,
                currentPage: allPositions.page,
                pageSize: allPositions.limit,
            }
        }
        return responseHandler(res, true, 200, 0, "Lấy các chức vụ thành công", allPositionsData)
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null)
    }
}


export const PositionController = {
    createPosition,
    getAllPositions
}