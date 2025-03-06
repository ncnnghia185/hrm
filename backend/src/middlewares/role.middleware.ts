import { Request, Response, NextFunction } from "express";
import { responseHandler } from "../utils/response_handler";

export const roleMiddleware = (requiredRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRoles = req.user?.roles || [];

        const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));
        if (!hasRequiredRole) {
            responseHandler(res, false, 403, 1, "Forbidden: You do not have the required role", null)
        }

        next();
    };
};
