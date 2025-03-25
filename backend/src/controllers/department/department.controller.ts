import { DepartmentServices } from "../../services/department/department.services";
import { Request, Response } from "express";
import { responseHandler } from "../../utils/response_handler";

const createDepartment = async (req: Request, res: Response) => {
    try {
        const { id, name } = req.body
        if (!id || !name) {
            return responseHandler(res, false, 400, 2, "Thông tin phòng ban không hợp lệ", null);
        }
        const existedDepartment = await DepartmentServices.checkDepartmentByName(id)
        if (existedDepartment) {
            return responseHandler(res, false, 409, 3, "Phòng ban này đã tồn tại", null)
        }
        await DepartmentServices.createNewDepartment(req.body)
        return responseHandler(res, true, 201, 0, "Tạo mới phòng ban thành công", null)
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null)
    }
}

const getAllDepartments = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const allDepartments = await DepartmentServices.selectAllDepartments(page, limit)
        const allDepartmentsData = {
            departments: allDepartments.data,
            pagination: {
                total: allDepartments.total,
                totalPages: allDepartments.totalPages,
                currentPage: allDepartments.page,
                pageSize: allDepartments.limit,
            }
        }
        return responseHandler(res, true, 200, 0, "Lấy các phòng ban thành công", allDepartmentsData)
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null)
    }
}


export const departmentController = {
    createDepartment,
    getAllDepartments
}