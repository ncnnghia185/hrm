import { Optional } from "sequelize";
import { Role } from "../../models/role/role.model";

export type CreateRoleDTO = Optional<Role, "createdAt" | "updatedAt">;

export type UpdateRoleDTO = Optional<Role, "id" | "createdAt" | "updatedAt">;