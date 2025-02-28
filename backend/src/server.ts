import http from "http";
import app from "./app";
import envConfig from "./configs/env.config";
import sequelize from "./configs/database.config";
import { setupSocket } from "./configs/socket.config";
import redis from "./configs/redis.config";

const PORT = envConfig.port;
const server = http.createServer(app);
const io = setupSocket(server)
server.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false });
        console.log("Connection to PostgreSQL successfully.");
        await redis.ping()
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1);
    }
});
