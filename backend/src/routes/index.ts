import { Application } from "express";
import roleRoutes from "./role/role.routes";
import permissionRoutes from "./permission/permission.routes";
import accountRoutes from "./account/account.routes";
const initWebRoutes = (app: Application) => {
    app.use("/api/account", accountRoutes)
    app.use("/api/roles", roleRoutes)
    app.use("/api/permissions", permissionRoutes)
}

export default initWebRoutes