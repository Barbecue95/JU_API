import { Router } from "express";
import productRoutes from "./productRoutes"
import authRoutes from "./authRoutes"

const router = Router();

router.use("/products", productRoutes)
router.use("/auth", authRoutes)

export default router