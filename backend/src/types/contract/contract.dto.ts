import { Optional } from "sequelize";
import { ContractTemplate } from "../../models/contract/contract_templates.model";

export type CreateContractDTO = Optional<ContractTemplate, "createdAt" | "updatedAt">;
export type UpdateContractDTO = Optional<ContractTemplate, "id" | "createdAt" | "updatedAt">;