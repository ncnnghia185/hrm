import dotenv from "dotenv";
dotenv.config()

export default {
    port : process.env.PORT,
    db: {
        host: process.env.DB_HOST as string ,
        username: process.env.DB_USER as string,
        password: process.env.DB_PASS as string,
        database: process.env.DB_NAME as string,
        port: Number(process.env.DB_PORT),
        dialect: process.env.DB_DIALECT as any,
    },
    jwt_secret: process.env.JWT_SECRET as string,
    node_mailer: { 
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    redis:{
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD
    },
    
}