// import { Router } from "express";
// import { roleController } from "../../controllers/role/role.controller";

// const router = Router()
// router.post('/create-role', roleController.createNewRole)
// router.get('/all-roles', roleController.getAllRoles)
// router.get("/role/:id", roleController.getRoleById)
// router.put("/update-role/:id", roleController.updateRole)
// router.delete("/delete-role/:id", roleController.deleteRole)

// export default router

import { Router } from "express";
import { roleController } from "../../controllers/role/role.controller";
import { verifyAccessToken } from "../../middlewares/auth.middleware";
import { checkRole } from "../../middlewares/role.middleware";
import { checkPermission } from "../../middlewares/permission.middleware";

const router = Router();

router.post(
    '/create-role',
    // verifyAccessToken,
    // checkRole(["admin", "hr"]),
    // checkPermission("create-role"),
    roleController.createNewRole
);

router.get(
    '/all-roles',
    verifyAccessToken,
    checkRole(["admin", "hr"]),
    checkPermission("view-roles"),
    roleController.getAllRoles
);

router.get(
    "/role/:id",
    verifyAccessToken,
    checkRole(["admin", "hr"]),
    checkPermission("view-role"),
    roleController.getRoleById
);

router.put(
    "/update-role/:id",
    verifyAccessToken,
    checkRole(["admin", "hr"]),
    checkPermission("update-role"),
    roleController.updateRole
);

router.delete(
    "/delete-role/:id",
    verifyAccessToken,
    checkRole(["admin", "hr"]),
    checkPermission("delete-role"),
    roleController.deleteRole
);

export default router;
