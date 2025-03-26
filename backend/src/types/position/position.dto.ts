import { Optional } from "sequelize";
import { Position } from "../../models/position/position.model";

export type CreatePositionDTO = Optional<Position, "createdAt" | "updatedAt">;