import { Router } from "express";
import {
  createProduct,
  DeleteProductById,
  getProducts,
} from "../handlers/products";

const router = Router();

/**
 * @openapi
 * /products:
 *   get:
 *     tags:
 *       - Product Details
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       "200":
 *         description: Fetched all products successfully
 *       "401":
 *         description: Unauthorized - Invalid token
 *       "400":
 *         description: Unable to fetch products
 */

router.get("/", getProducts);

router.post("/", createProduct);

/**
 * @openapi
 * /products/DeleteProduct:
 *   delete:
 *     summary: Delete a product
 *     tags:
 *       - Product Details
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *         description: Product Id
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       "200":
 *         description: Fetched all products successfully
 *       "401":
 *         description: Unauthorized - Invalid token
 *       "400":
 *         description: Unable to fetch products
 */
router.delete("/:id", DeleteProductById);

export default router;
