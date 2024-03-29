import express from "express";
import { AuthController } from "./auth.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post("/login", AuthController.loginUser);

router.get("/profile", auth(UserRole.USER), AuthController.UserProfile);

export const authRouter = router;
