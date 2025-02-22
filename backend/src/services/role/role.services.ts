import { Role } from "../../models/role/role.model";
import { CreateRoleDTO, UpdateRoleDTO } from "../../types/role/role.dto";

const createRole = async (data: CreateRoleDTO) => {
    return await Role.create(data)
}

const selectAllRoles = async () => {
    return await Role.findAll()
}

const selectRoleById = async (id: string) => {
    return await Role.findByPk(id)
}

const updateRole = async (id: string, data: UpdateRoleDTO) => {
    const role = await Role.findByPk(id);
    if (!role) {
        throw new Error("Role not found");
    }
    return await Role.update(data, { where: { id } })
}

const deleteRole = async (id: string) => {
    const role = await Role.findByPk(id);
    if (!role) {
        throw new Error("Role not found");
    }
    return await Role.destroy({ where: { id } })
}

export const RoleServices = {
    createRole,
    selectAllRoles,
    selectRoleById,
    updateRole,
    deleteRole,
}