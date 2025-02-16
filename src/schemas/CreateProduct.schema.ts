/**
 * @openapi
 * components:
 *   schemas:
 *     CreateProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: productName
 *         sku:
 *           type: string
 *           example: SKU123
 *         description:
 *           type: string
 *           example: Description
 *         weight:
 *           type: integer
 *           format: int32
 *           example: 10
 *         price:
 *           type: integer
 *           format: int32
 *           example: 10000
 *         quantity:
 *           type: integer
 *           format: int32
 *           default: 10
 *       xml:
 *         name: CreateProduct
 */

export interface CreateProductSchema {
  name: string;
  sku: string;
  description: string;
  weight: number;
  price: number;
  quantity: number;
}
