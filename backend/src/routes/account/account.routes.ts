import { Router } from "express";
import { accountController } from "../../controllers/account/account.controller";
const router = Router()
router.post("/create-account", accountController.createNewAccount)
router.post("/login-account", accountController.loginAccount)
router.post("/logout-account", accountController.logoutAccount)
export default router