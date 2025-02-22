
import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from './auth.middleware';


/**
 * Middleware to check if the user has the required permission
 * @param requiredPermission - The specific permission needed to access the route
 */
export const checkPermission = (requiredPermission: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        verifyAccessToken(req, res, () => {
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: 'User not authenticated',
                });
            }

            // Allow admin to bypass permission checks (optional)
            if (req.user.role === 'admin') {
                return next();
            }

            // Check if user has the required permission
            const userPermissions = req.user.permissions || [];
            if (!userPermissions.includes(requiredPermission)) {
                return res.status(403).json({
                    success: false,
                    message: `Permission '${requiredPermission}' is required to access this resource`,
                });
            }

            next();
        });
    };
};