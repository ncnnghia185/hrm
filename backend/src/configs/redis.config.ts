import { Redis } from "ioredis";
import envConfig from "./env.config";
const redis = new Redis({
    host: envConfig.redis.host,
    port: Number(envConfig.redis.port),
    password: envConfig.redis.password,
    db: 0
})

redis.on("connect", () => {
    console.log("Connected to Redis")
})

redis.on("error", (err) => {
    console.error("Redis Error:", err);
});

export default redis;