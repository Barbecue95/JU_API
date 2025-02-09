import { Router } from "express";
import {
  createProduct,
  getProductById,
  getProducts,
} from "../handlers/products";

const router = Router();

// /api/products
router.get("/", getProducts);

// /api/products/123
router.get("/:id", getProductById);

router.post("/", createProduct);

export default router;
