// src/routes/index.ts
import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from "./user";
import organizationRoutes from "./organization";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/organizations", organizationRoutes);

export default router;
