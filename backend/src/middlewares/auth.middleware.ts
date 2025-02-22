import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import configEnv from "../configs/env.config";
export interface UserPayload {
    id: string;
    role: string;
    permissions?: string[];
}

declare module "express" {
    interface Request {
        user?: UserPayload;
    }
}

/**
 * Middleware to verify access token
 */
export const verifyAccessToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader?.startsWith("Bearer ")) {
            res.status(401).json({
                success: false,
                message: "Required Authentication",
            });
            return
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(
            token,
            configEnv.jwt_secret,
            (err, decoded) => {
                if (err) {
                    res.status(401).json({
                        success: false,
                        message: "Invalid Token",
                    });
                    return
                }
                req.user = decoded as UserPayload;
                next();
            }
        );
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
