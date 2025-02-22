import { Optional } from "sequelize";
import { Account } from "../../models/account/account.model";

export type CreateAccountDTO = Optional<Account, "createdAt" | "updatedAt">;

export type UpdateAccountDTO = Optional<Account, "id" | "createdAt" | "updatedAt">;