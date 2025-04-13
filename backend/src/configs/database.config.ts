import { Sequelize } from "sequelize-typescript";
import envConfig from "./env.config";
import {
    Account,
    AccountRole,
    Role,
    RolePermission,
    ContractTemplate,
    Department,
    Employee,
    FailedLogin,
    PasswordReset,
    Permission,
    Position,
    RefreshToken,
    EmployeeContract
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
        ContractTemplate,
        Department,
        Employee,
        FailedLogin,
        PasswordReset,
        Permission,
        Position,
        RefreshToken,
        EmployeeContract
    ]
})

export default sequelize
