import { Optional } from "sequelize";
import { Department } from "../../models/department/department.model";

export type CreateDepartmentDTO = Optional<Department, "createdAt" | "updatedAt">;