import { Sequelize } from "sequelize";
import envConfig from "./env.config";

const sequelize = new Sequelize(envConfig.db.database, envConfig.db.username, envConfig.db.password,{
    dialect: envConfig.db.dialect,
    host: envConfig.db.host,
    port: envConfig.db.port,
    logging:false,
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }  
})

export default sequelize