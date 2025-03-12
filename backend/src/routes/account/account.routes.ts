import { Router } from "express";
import { accountController } from "../../controllers/account/account.controller";
const router = Router()
router.post("/create-account", accountController.createNewAccount)
router.post("/login-account", accountController.loginAccount)
router.post("/logout-account", accountController.logoutAccount)
router.post("/send-reset-password-email", accountController.sendMailChangePassword)
router.post("/confirm-otp", accountController.confirmOTPForgotPassword)
router.post("/forgot-password", accountController.forgotPassword)
export default router