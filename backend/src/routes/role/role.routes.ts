import { Router } from "express";
import { roleController } from "../../controllers/role/role.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";
import { permissionMiddleware } from "../../middlewares/permission.middleware";

const router = Router();

router.post(
    '/create-role',
    // authMiddleware,
    // roleMiddleware(["admin"]),
    // permissionMiddleware(["create-role"]),
    roleController.createRole
);

router.get(
    '/all-roles',
    // verifyAccessToken,
    // checkRole(["admin", "hr"]),
    // checkPermission("view-roles"),
    roleController.getAllRoles
);

router.get(
    "/detail-role/:id",
    // verifyAccessToken,
    // checkRole(["admin", "hr"]),
    // checkPermission("view-role"),
    roleController.getRoleDetail
);

router.put(
    "/update-role/:id",
    authMiddleware,
    // checkRole(["admin", "hr"]),
    // checkPermission("update-role"),
    roleController.updateRole
);

router.delete(
    "/delete-role/:name",
    // verifyAccessToken,
    // checkRole(["admin", "hr"]),
    // checkPermission("delete-role"),
    roleController.deleteRole
);

router.post("/assign/:roleId/permissions", roleController.assignPermission)
router.post("/assign-role-to-user", roleController.assignAccountRole)
router.delete("/remove-permissions/:rId/:pId", authMiddleware, roleController.removePermissionFromRole)
export default router;
