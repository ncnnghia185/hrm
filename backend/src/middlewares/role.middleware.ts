import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "./auth.middleware";
import { UserPayload } from "./auth.middleware";

export const checkRole = (allowedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        verifyAccessToken(req, res, () => {
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: "User not authenticated",
                });
            }

            if (!allowedRoles.includes(req.user.role)) {
                return res.status(403).json({
                    success: false,
                    message: `Role '${req.user.role}' is not authorized for this action. Required roles: ${allowedRoles.join(", ")}`,
                });
            }

            next();
        });
    };
};
