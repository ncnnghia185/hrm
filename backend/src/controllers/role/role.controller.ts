import { RoleServices } from "../../services/role/role.services";
import { Request, Response } from "express";
import { responseHandler } from "../../utils/response_handler";
const checkRoleExists = async (id: string) => {
    const role = await RoleServices.selectRoleById(id);
    return role ? role : null;
};
// create new role
const createNewRole = async (req: Request, res: Response) => {
    try {
        const { id, name } = req.body
        if (!id || !name) {
            responseHandler(res, false, 400, 2, "Missing required fields", null)
            return
        }
        await RoleServices.createRole(req.body)
        responseHandler(res, true, 201, 0, "Successfully", null)
    } catch (error) {
        responseHandler(res, false, 500, 1, String(error), null)
        return
    }
}

// get all roles
const getAllRoles = async (req: Request, res: Response) => {
    try {
        const allRoles = await RoleServices.selectAllRoles()
        res.status(200).json({
            success: true,
            errCode: 0,
            message: "Get all roles successfully",
            data: allRoles
        })
        return
    } catch (error) {
        responseHandler(res, false, 500, 1, "Server Error", null)
        return
    }
}

// get role by id
const getRoleById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const role = await RoleServices.selectRoleById(id)
        if (!role) {
            responseHandler(res, false, 404, 2, "Role not found", null)
            return
        }
        res.status(200).json({
            success: true,
            errCode: 0,
            message: "Get all roles successfully",
            data: role
        })
        return
    } catch (error) {
        responseHandler(res, false, 500, 1, "Server Error", null)
        return
    }
}

// update role
const updateRole = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { name, description } = req.body
        const role = await checkRoleExists(id);
        if (!role) {
            return responseHandler(res, false, 404, 2, "Role not found", null);
        }
        // Kiểm tra dữ liệu hợp lệ
        if (!name && !description) {
            return responseHandler(res, false, 400, 3, "Nothing to update", null);
        }
        await RoleServices.updateRole(id, req.body)
        return responseHandler(res, true, 201, 0, "Role updated successfully", null);

    } catch (error) {
        responseHandler(res, false, 500, 1, "Server Error", null)
        return
    }
}

// delete role
const deleteRole = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const role = await checkRoleExists(id);
        if (!role) {
            return responseHandler(res, false, 404, 2, "Role not found", null);
        }
        await RoleServices.deleteRole(id)
        return responseHandler(res, true, 201, 0, "Role deleted successfully", null);
    } catch (error) {
        responseHandler(res, false, 500, 1, "Server Error", null)
        return
    }
}

export const roleController = {
    createNewRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole,
};
