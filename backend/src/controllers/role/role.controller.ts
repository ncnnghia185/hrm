import { RoleServices } from "../../services/role/role.services";
import { Request, Response } from "express";
import { responseHandler } from "../../utils/response_handler";
const checkRoleExists = async (name: string) => {
    const role = await RoleServices.checkRole(name);
    return role ? role : null;
};
// create new role
const createRole = async (req: Request, res: Response) => {
    try {
        const { id, name } = req.body.roleInfor
        if (!id || !name) {
            return responseHandler(res, false, 400, 2, "Thiếu các thông tin bắt buộc", null)
        }
        const existedRole = await checkRoleExists(name)
        if (existedRole) {
            return responseHandler(res, false, 409, 3, "Vai trò đã tồn tại", null)
        }
        await RoleServices.createNewRole(req.body)
        return responseHandler(res, true, 201, 0, "Tạo mới vai trò thành công", null)
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error), null)
    }
}

// get all roles
const getAllRoles = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const allRoles = await RoleServices.selectAllRoles(page, limit)
        const allRolesData = {
            roles: allRoles.data,
            pagination: {
                total: allRoles.total,
                totalPages: allRoles.totalPages,
                currentPage: allRoles.page,
                pageSize: allRoles.limit,
            }
        }
        return responseHandler(res, true, 200, 0, "Lấy các quyền thành công", allRolesData)
    } catch (error) {
        return responseHandler(res, false, 500, 1, "Lỗi server", null)
    }
}

// get detail role
const getRoleDetail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const role = await RoleServices.selectDetailRole(id)
        if (!role) {
            return responseHandler(res, false, 404, 2, "Không tìm thấy vai trò này", null)
        }
        return responseHandler(res, true, 200, 0, "Lấy thông tin vai trò thành công", role)
    } catch (error) {
        return responseHandler(res, false, 500, 1, "Lỗi server", null)
    }
}

// update role
const updateRole = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body
        const role = await checkRoleExists(name);
        if (!role) {
            return responseHandler(res, false, 404, 2, "Không tìm thấy vai trò này", null);
        }

        if (!name && !description) {
            return responseHandler(res, false, 400, 3, "Không có giá trị cập nhật mới", null);
        }
        await RoleServices.updateRole(id, req.body)
        return responseHandler(res, true, 201, 0, "Cập nhật vai trò thành công", null);
    } catch (error) {
        return responseHandler(res, false, 500, 1, "Lỗi server", null)
    }
}

// delete role
const deleteRole = async (req: Request, res: Response) => {
    try {
        const { name } = req.params
        const role = await checkRoleExists(name);
        if (!role) {
            return responseHandler(res, false, 404, 2, "Không tìm thấy vai trò này", null);
        }
        await RoleServices.deleteRole(name)
        return responseHandler(res, true, 201, 0, "Xóa vai trò thành công", null);
    } catch (error) {
        return responseHandler(res, false, 500, 1, "Lỗi server", null)
    }
}

const assignPermission = async (req: Request, res: Response) => {
    try {
        const { roleId } = req.params;
        const { permissionIds } = req.body;
        await RoleServices.assignPermissionsToRole(roleId, permissionIds);
        return responseHandler(res, true, 200, 0, "Gán quyền cho vai trò thành công", null)

    } catch (error) {
        return responseHandler(res, false, 500, 1, "Lỗi server", null)
    }
}

const removePermissionFromRole = async (req: Request, res: Response) => {
    try {
        const { rId, pId } = req.params
        await RoleServices.removePermissionFromRole(rId, pId);
        return responseHandler(res, true, 200, 0, "Xóa quyền khỏi vai trò thành công", null)
    } catch (error) {
        return responseHandler(res, false, 500, 1, String(error) || "Lỗi server", null)
    }
}

const assignAccountRole = async (req: Request, res: Response) => {
    try {
        const { accountId, roleId } = req.body
        if (!accountId || !roleId) {
            return responseHandler(res, false, 404, 3, "Thiếu các thông tin bắt buộc", null)
        }
        await RoleServices.assignRoleToUser(accountId, roleId);
        return responseHandler(res, true, 200, 0, "Gán vai trò cho tài khoản thành công", null)

    } catch (error) {
        return responseHandler(res, false, 500, 1, "Lỗi server", null)
    }
}
export const roleController = {
    createRole,
    getAllRoles,
    getRoleDetail,
    updateRole,
    deleteRole,
    assignPermission,
    assignAccountRole,
    removePermissionFromRole
};
