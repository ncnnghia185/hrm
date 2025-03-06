import { RoleServices } from "../../services/role/role.services";
import { Request, Response } from "express";
import { responseHandler } from "../../utils/response_handler";
import { AppError } from "../../utils/custom_error";
const checkRoleExists = async (name: string) => {
    const role = await RoleServices.selectRoleByName(name);
    return role ? role : null;
};
// create new role
const createNewRole = async (req: Request, res: Response) => {
    try {
        const { id, name, description } = req.body
        if (!id || !name) {
            responseHandler(res, false, 400, 2, "Thiếu các thông tin bắt buộc", null)
            return
        }
        const existedRole = await checkRoleExists(name)
        if (existedRole) {
            responseHandler(res, false, 409, 3, "Vai trò đã tồn tại", null)
            return
        }
        await RoleServices.createRole(req.body)
        responseHandler(res, true, 201, 0, "Tạo mới vai trò thành công", null)
    } catch (error) {
        responseHandler(res, false, 500, 1, String(error), null)
        return
    }
}

// get all roles
const getAllRoles = async (req: Request, res: Response) => {
    try {
        const allRoles = await RoleServices.selectAllRoles()
        responseHandler(res, true, 200, 0, "Lấy các quyền thành công", allRoles)

    } catch (error) {
        responseHandler(res, false, 500, 1, "Lỗi server", null)
        return
    }
}

// get role by id
const getRoleByName = async (req: Request, res: Response) => {
    try {
        const { name } = req.params
        const role = await RoleServices.selectRoleByName(name)
        if (!role) {
            responseHandler(res, false, 404, 2, "Không tìm thấy vai trò này", null)
            return
        }
        return responseHandler(res, true, 200, 0, "Lấy thông tin vai trò thành công", role)
    } catch (error) {
        responseHandler(res, false, 500, 1, "Lỗi server", null)
        return
    }
}

// update role
const updateRole = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body
        const role = await checkRoleExists(name);
        if (!role) {
            return responseHandler(res, false, 404, 2, "Không tìm thấy vai trò này", null);
        }

        if (!name && !description) {
            return responseHandler(res, false, 400, 3, "Không có giá trị cập nhật mới", null);
        }
        await RoleServices.updateRole(name, req.body)
        return responseHandler(res, true, 201, 0, "Cập nhật vai trò thành công", null);

    } catch (error) {
        responseHandler(res, false, 500, 1, "Lỗi server", null)
        return
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
        responseHandler(res, false, 500, 1, "Lỗi server", null)
        return
    }
}

const assignPermission = async (req: Request, res: Response) => {
    try {
        const { roleId } = req.params;
        const { permissionIds } = req.body;
        await RoleServices.assignPermissionsToRole(roleId, permissionIds);
        responseHandler(res, true, 200, 0, "Gán quyền cho vai trò thành công", null)
    } catch (error) {
        responseHandler(res, false, 500, 1, "Lỗi server", null)
        return
    }
}

const getPermissionsByRole = async (req: Request, res: Response) => {
    try {
        const { roleId } = req.params;
        const permissions = await RoleServices.getPermissionsByRole(roleId);
        responseHandler(res, true, 200, 0, "Lấy các quyền thành công", permissions)
    } catch (error) {
        responseHandler(res, false, 500, 1, "Lỗi server", null)
    }
};

const assignAccountRole = async (req: Request, res: Response) => {
    try {
        const { accountId, roleId } = req.body
        if (!accountId || !roleId) {
            responseHandler(res, false, 404, 3, "Thiếu các thông tin bắt buộc", null)
        }
        await RoleServices.assignRoleToUser(accountId, roleId);
        responseHandler(res, true, 200, 0, "Gán vai trò cho tài khoản thành công", null)
    } catch (error) {
        responseHandler(res, false, 500, 1, "Lỗi server", null)
    }
}
export const roleController = {
    createNewRole,
    getAllRoles,
    getRoleByName,
    updateRole,
    deleteRole,
    assignPermission,
    getPermissionsByRole,
    assignAccountRole
};
