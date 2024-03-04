// routers/authRouter.js
import express from "express";
import { Login, Logout, Me } from "../controllers/AuthControllers.js";

const router = express.Router();
// Step 14, auth login
// Step 15, ada di AuthController.js
router.get("/me", Me);
router.post("/login", Login);
router.delete("/logout", Logout);

export default router;
