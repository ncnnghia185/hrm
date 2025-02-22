import { Optional } from "sequelize";
import { Permission } from "../../models/permission/permission.model";

export type CreatePermissionDTO = Optional<Permission, "createdAt" | "updatedAt">;

export type UpdatePermissionDTO = Optional<Permission, "id" | "createdAt" | "updatedAt">;