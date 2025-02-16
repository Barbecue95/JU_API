import { Router } from "express";
import {
  createProduct,
  DeleteProductById,
  getProductById,
} from "../handlers/products";

const router = Router();

/**
 * @openapi
 * /products/CreateProduct:
 *   get:
 *     tags:
 *       - Product
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       "200":
 *         description: Product created successfully
 *       "400":
 *         description: Bad request - Unable to create product
 *       "401":
 *         description: Unauthorized - Invalid token
 */
router.get("/", getProductById);

/**
 * @openapi
 * /products/CreateProduct:
 *   post:
 *     tags:
 *       - Product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CreateProduct"
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       "200":
 *         description: Product created successfully
 *       "400":
 *         description: Bad request - Unable to create product
 *       "401":
 *         description: Unauthorized - Invalid token
 */

router.post("/", createProduct);

/**
 * @openapi
 * /products/DeleteProduct:
 *   delete:
 *     summary: Delete a product
 *     tags:
 *       - Product
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
