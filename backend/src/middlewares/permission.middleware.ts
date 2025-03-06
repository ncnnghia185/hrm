import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/custom_error";
import { AccountRole } from "../models/role/account_roles.model";
import { RolePermission } from "../models/role/role_permission.model";
import { responseHandler } from "../utils/response_handler";

export const permissionMiddleware = (requiredPermissions: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const accountId = req.user?.id;

        // Lấy danh sách Role của User
        const userRoles = await AccountRole.findAll({ where: { account_id: accountId } });
        const roleIds = userRoles.map(ur => ur.role_id);

        // Lấy danh sách Permission từ các Role
        const rolePermissions = await RolePermission.findAll({ where: { role_id: roleIds } });
        const userPermissions = rolePermissions.map(rp => rp.permission_id);

        // Kiểm tra xem User có quyền cần thiết không
        const hasPermission = requiredPermissions.some(permission => userPermissions.includes(permission));

        if (!hasPermission) {
            responseHandler(res, false, 403, 403, "Forbidden: You do not have the required permission", null)
        }

        next();
    };
};
