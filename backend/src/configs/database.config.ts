import { Sequelize } from "sequelize-typescript";
import envConfig from "./env.config";
import {
    Account,
    AccountRole,
    Role,
    RolePermission,
    Contract,
    Department,
    Employee,
    FailedLogin,
    PasswordReset,
    Permission,
    Position,
    RefreshToken
} from "../models/index";

const sequelize = new Sequelize({
    database: envConfig.db.database,
    username: envConfig.db.username,
    password: envConfig.db.password,
    dialect: envConfig.db.dialect,
    host: envConfig.db.host || "postgres",
    port: envConfig.db.port,
    logging: false,
    models: [
        Role,
        AccountRole,
        RolePermission,
        Account,
        Contract,
        Department,
        Employee,
        FailedLogin,
        PasswordReset,
        Permission,
        Position,
        RefreshToken]
})

export default sequelize
