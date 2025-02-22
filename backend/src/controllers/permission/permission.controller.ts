import { Request, Response } from "express";
import { PermissionServices } from "../../services/permission/permission.services";
import { responseHandler } from "../../utils/response_handler";

const checkPermissionExists = async (id: string) => {
    const permission = await PermissionServices.selectPermissionById(id);
    return permission ? permission : null;
};

// create new permission

const createNewPermission = async (req: Request, res: Response) => {
    try {
        const { id, name, description } = req.body
        if (!id || !name || !description) {
            responseHandler(res, false, 400, 2, "Missing required fields")
            return
        }
        await PermissionServices.createPermission(req.body)
        responseHandler(res, true, 201, 0, "Successfully")
    } catch (error) {
        console.error(error)
        responseHandler(res, false, 500, 1, "Internal server error")
    }
};

// get all permissions

const getAllPermissions = async (req: Request, res: Response) => {
    try {
        const allPermissions = await PermissionServices.selectAllPermissions()
        res.status(200).json({
            success: true,
            errCode: 0,
            message: "Get all permissions successfully",
            data: allPermissions
        })
    } catch (error) {
        console.error(error)
        responseHandler(res, false, 500, 1, "Internal server error")
    }
};

// get permission

const getPermissionById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const permission = await checkPermissionExists(id)
        if (!permission) {
            responseHandler(res, false, 404, 2, "Permission not found")
            return
        }
        res.status(200).json({
            success: true,
            errCode: 0,
            message: "Get permission successfully",
            data: permission
        })
    } catch (error) {
        console.error(error)
        responseHandler(res, false, 500, 1, "Internal server error")
    }
};

// update permission

const updatePermission = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const permission = await checkPermissionExists(id)
        if (!permission) {
            responseHandler(res, false, 404, 2, "Permission not found")
            return
        }
        const { name, description } = req.body
        if (!name && !description) {
            responseHandler(res, false, 400, 3, "Nothing to update")
            return
        }
        await PermissionServices.updatePermission(id, req.body)
        responseHandler(res, true, 200, 0, "Permission updated successfully")
    } catch (error) {
        console.error(error)
        responseHandler(res, false, 500, 1, "Internal server error")
    }
};

// delete permission

const deletePermission = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const permission = await checkPermissionExists(id)
        if (!permission) {
            responseHandler(res, false, 404, 2, "Permission not found")
            return
        }
        await PermissionServices.deletePermission(id)
        responseHandler(res, true, 200, 0, "Permission deleted successfully")
    } catch (error) {
        console.error(error)
        responseHandler(res, false, 500, 1, "Internal server error")
    }
};

export const permissionController = {
    createNewPermission,
    getAllPermissions,
    getPermissionById,
    updatePermission,
    deletePermission
}
