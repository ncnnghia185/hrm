import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import configEnv from "../configs/env.config";
import { responseHandler } from "../utils/response_handler";
export interface UserPayload {
    id: string;
    roles: string[];
    permissions?: string[];
}

declare module "express" {
    interface Request {
        user?: UserPayload;
    }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.startsWith("Bearer ") ? req.headers.authorization.split(" ")[1] : null

    if (!token) {
        responseHandler(res, false, 401, 401, "Unauthorized: No token provided", null)
        return
    }

    try {
        const decoded = jwt.verify(token, configEnv.jwt_secret) as UserPayload;;
        req.user = {
            id: decoded.id,
            roles: Array.isArray(decoded.roles) ? decoded.roles : [decoded.roles],
            permissions: decoded.permissions || [],
        };
        next();
    } catch (error) {
        responseHandler(res, false, 401, 1, String(error), null)
        return
    }
};
