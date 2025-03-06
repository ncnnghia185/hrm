import { Op } from "sequelize";
import { Permission } from "../../models/permission/permission.model";
import { CreatePermissionDTO, UpdatePermissionDTO } from "../../types/permission/permission.dto";
import { AppError } from "../../utils/custom_error";
import { RolePermission } from "../../models";
const createParentPermission = async (data: CreatePermissionDTO) => {
    const checkPermission = await Permission.findOne({ where: { name: data.name } })
    if (checkPermission) {
        throw new AppError("Nhóm quyền này đã tồn tại", 201, 1001)
    }
    return await Permission.create(data);
}

const createChildrenPermission = async (parent_id: string, data: CreatePermissionDTO[]) => {
    const parent = await Permission.findByPk(parent_id);
    if (!parent) {
        throw new AppError(`Nhóm quyền này chưa tồn tại`, 201, 1000);
    }
    const permissionNames = data.map(permission => permission.name);
    const duplicateNames = permissionNames.filter((name, index) => permissionNames.indexOf(name) !== index);
    if (duplicateNames.length > 0) {
        throw new AppError(`Các quyền con không được trùng tên`, 201, 1001);
    }
    const existingPermissions = await Permission.findAll({
        where: {
            name: permissionNames,
            parent_id
        }
    });

    if (existingPermissions.length > 0) {
        const existingNames = existingPermissions.map(p => p.name);
        throw new AppError(`${existingNames.join(', ')} quyền này đã tồn tại: `, 201, 1002);
    }

    const permissionsWithParent = data.map(permission => ({
        ...permission,
        parent_id
    }));
    return await Permission.bulkCreate(permissionsWithParent);
}

const selectAllPermissions = async (page: number, limit: number) => {
    const offset = (page - 1) * limit;
    const { count, rows } = await Permission.findAndCountAll({
        where: { parent_id: null },
        limit,
        offset,
        order: [["createdAt", "DESC"]],
    });

    return {
        total: count,
        page,
        limit,
        totalPages: Math.ceil(count / limit),
        data: rows
    };
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
    const isPermissionUsed = await RolePermission.findOne({ where: { permission_id: id } });
    if (isPermissionUsed) {
        throw new AppError("Permission is assigned to a Role and cannot be deleted", 400, 1005);
    }
    return await Permission.destroy({ where: { id } });
}

const selectPermissionTree = async () => {
    return await Permission.findAll({
        attributes: ["id", "name", "parent_id"],
        include: [
            {
                model: Permission,
                as: "children",
                attributes: ["id", "name"],
            }
        ]
    });
};


const selectPermissionByListIds = async (ids: string[]) => {
    return await Permission.findAll({ where: { id: ids } })
}

const selectChildrenPermissions = async (parent_id: string) => {
    return await Permission.findAll({ where: { parent_id } });
}

const searchPermissionsByName = async (name: string) => {
    return await Permission.findAll({ where: { name: { [Op.like]: `%${name}%` } } });
}
export const PermissionServices = {
    createParentPermission,
    createChildrenPermission,
    selectAllPermissions,
    selectPermissionById,
    selectPermissionTree,
    selectPermissionByListIds,
    selectChildrenPermissions,
    searchPermissionsByName,
    updatePermission,
    deletePermission,
}