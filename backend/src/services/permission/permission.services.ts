import { Permission } from "../../models/permission/permission.model";
import { CreatePermissionDTO, UpdatePermissionDTO } from "../../types/permission/permission.dto";

const createPermission = async (data: CreatePermissionDTO) => {
    return await Permission.create(data);
}

const selectAllPermissions = async () => {
    return await Permission.findAll();
}

const selectPermissionById = async (id: string) => {
    return await Permission.findByPk(id);
}

const updatePermission = async (id: string, data: UpdatePermissionDTO) => {
    const permission = await selectPermissionById(id);
    if (!permission) {
        throw new Error("Permission not found");
    }
    return await Permission.update(data, { where: { id } });
}

const deletePermission = async (id: string) => {
    const permission = await selectPermissionById(id);
    if (!permission) {
        throw new Error("Permission not found");
    }
    return await Permission.destroy({ where: { id } });
}

export const PermissionServices = {
    createPermission,
    selectAllPermissions,
    selectPermissionById,
    updatePermission,
    deletePermission,
}