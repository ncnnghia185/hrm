import sequelize from "../../configs/database.config";
import { AccountRole, Permission, RolePermission } from "../../models";
import { Role } from "../../models/role/role.model";
import { CreateRoleDTO, UpdateRoleDTO } from "../../types/role/role.dto";
import { AppError } from "../../utils/custom_error";

const createRole = async (data: CreateRoleDTO) => {
    // const checkExistedRole = await Role.findOne({where: {name: data.name}})
    // if (checkExistedRole) {
    //     throw new AppError("Vai trò này đã tồn tại", 201, 1001)
    // }
    return await Role.create(data);
}

const selectAllRoles = async () => {
    return await Role.findAll({
        attributes: ["id", "name", "description"], include: [
            { model: RolePermission }
        ]
    })
}

const selectRoleByName = async (name: string) => {
    return await Role.findOne({
        where: { name: name },
        attributes: ["id", "name", "description"],
        include: [{ model: RolePermission }]
    })
}

const updateRole = async (id: string, data: UpdateRoleDTO) => {
    return await Role.update(data, { where: { id } })
}

const deleteRole = async (id: string) => {
    return await Role.destroy({ where: { id } })
}

const assignPermissionsToRole = async (roleId: string, permissionIds: string[]) => {
    const transaction = await sequelize.transaction();
    try {
        const role = await Role.findByPk(roleId);
        if (!role) throw new AppError("Role not found", 404, 1002);

        await RolePermission.destroy({ where: { role_id: roleId }, transaction });

        const rolePermissions = permissionIds.map((permissionId) => ({
            role_id: roleId,
            permission_id: permissionId,
        })) as any[];

        await RolePermission.bulkCreate(rolePermissions, { transaction });

        await transaction.commit();
        return true;
    } catch (error) {
        await transaction.rollback();
        throw new AppError(String(error), 500, 1003);
    }
};

const getPermissionsByRole = async (roleId: string) => {
    return await Permission.findAll({
        include: [{
            model: RolePermission,
            where: { role_id: roleId },
            attributes: [],
        }],
        attributes: ["id", "name", "description"]
    });
};

const removePermissionFromRole = async (roleId: string, permissionId: string) => {
    return await RolePermission.destroy({
        where: { role_id: roleId, permission_id: permissionId }
    });
};

const assignRoleToUser = async (accountId: string, roleId: string) => {
    const exists = await AccountRole.findOne({ where: { account_id: accountId, role_id: roleId } });
    if (exists) {
        throw new AppError("User already has this role", 400, 1006);
    }
    return await AccountRole.create({ account_id: accountId, role_id: roleId } as any);
};

const removeRoleFromUser = async (userId: string, roleId: string) => {
    return await AccountRole.destroy({ where: { account_id: userId, role_id: roleId } });
};

export const RoleServices = {
    createRole,
    selectAllRoles,
    selectRoleByName,
    updateRole,
    deleteRole,
    assignPermissionsToRole,
    getPermissionsByRole,
    removePermissionFromRole,
    assignRoleToUser,
    removeRoleFromUser
}