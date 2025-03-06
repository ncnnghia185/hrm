import { Optional } from "sequelize";
import { Role } from "../../models/role/role.model";
import { RolePermission } from "../../models";

export type CreateRoleDTO = Optional<Role, "createdAt" | "updatedAt">;

export type UpdateRoleDTO = Optional<Role, "id" | "createdAt" | "updatedAt">;