import redis from "../configs/redis.config";

// Set cache with TTL (time to live)
export const setCache = async (key:string, value:any, ttl:number) => {
    try {
        const data = JSON.stringify(value);
        await redis.set(key, data, "EX", ttl);
    } catch (error) {
        console.error("Error setting cache:", error);
    }
}


// Get cached data
export const getCache = async (key: string) => {
    try {
        const data = await redis.get(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    } catch (error) {
        console.error("Error getting cache:", error);
        return null;
    }
}

// Delete cache

export const deleteCache = async (key: string) => {
    try {
        await redis.del(key);
    } catch (error) {
        console.error("Error deleting cache:", error);
    }
}
