import { Router } from "express";
import {
  createProduct,
  DeleteProductById,
  getProductById,
  getProducts,
} from "../handlers/products";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

/**
 * @openapi
 * /products:
 *   get:
 *      summary: Get all products
 *      tags:
 *       - Product
 *      security:
 *       - BearerAuth: []
 *      responses:
 *       "200":
 *         description: Product created successfully
 *       "400":
 *         description: Bad request - Unable to create product
 *       "401":
 *         description: Unauthorized - Invalid token
 */
router.get("/", authMiddleware, getProducts);

/**
 * @openapi
 * /products/{id}:
 *   get:
 *      summary: Get product by id
 *      tags:
 *       - Product
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID
 *      security:
 *       - BearerAuth: []
 *      responses:
 *       "200":
 *         description: Product created successfully
 *       "400":
 *         description: Bad request - Unable to create product
 *       "401":
 *         description: Unauthorized - Invalid token
 */
router.get("/:id", getProductById);

/**
 * @openapi
 * /products:
 *   post:
 *     summary: Create a Product
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
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request - Unable to create product
 *       401:
 *         description: Unauthorized - Invalid token
 */

router.post("/", createProduct);


/**
 * @openapi
 * /products/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags:
 *       - Product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       401:
 *         description: Unauthorized - Invalid token
 *       400:
 *         description: Bad request - Unable to delete product
 */
router.delete("/:id", DeleteProductById);


export default router;
