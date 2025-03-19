import sequelize from "../../configs/database.config";
import { AccountRole, Permission, RolePermission } from "../../models";
import { Role } from "../../models/role/role.model";
import { UpdateRoleDTO } from "../../types/role/role.dto";
import { AppError } from "../../utils/custom_error";

const checkRole = async (name: string) => {
    return Role.findOne({ where: { name: name } })
}

const createNewRole = async (data: { roleInfor: { id: string, name: string, description?: string }, permissions?: string[] }) => {
    const transaction = await sequelize.transaction()
    try {
        const role = await Role.create({ id: data.roleInfor.id, name: data.roleInfor.name, description: data.roleInfor.description } as any, { transaction });
        if (data.permissions && data.permissions.length > 0) {
            const rolePermissions = data.permissions.map((permissionId) => ({
                role_id: role.id,
                permission_id: permissionId,
            } as any));

            await RolePermission.bulkCreate(rolePermissions, { transaction });
            await transaction.commit();
            return role;
        }
    } catch (error) {
        await transaction.rollback();
        throw new AppError(String(error), 500, 1004);
    }
}

const selectAllRoles = async (page: number, limit: number) => {
    const offset = (page - 1) * limit;
    const { count, rows } = await Role.findAndCountAll({
        attributes: ["id", "name", "description"],
        limit: limit,
        offset: offset,
    });
    return {
        total: count,
        page,
        limit,
        totalPages: Math.ceil(count / limit),
        data: rows
    };
}

const selectDetailRole = async (role_id: string) => {
    return await Role.findOne({
        where: { id: role_id },
        attributes: ["id", "name", "description"],
        include: [{
            model: Permission,
            through: { attributes: [] },
            attributes: ["id", "name", "description"]
        }]
    });
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
    checkRole,
    createNewRole,
    selectAllRoles,
    selectDetailRole,
    updateRole,
    deleteRole,
    assignPermissionsToRole,
    removePermissionFromRole,
    assignRoleToUser,
    removeRoleFromUser
}