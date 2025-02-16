import { Request, Response } from "express";
import { CreateProductSchema } from "../schemas/CreateProduct.schema";

export function getProducts(req: Request, res: Response) {
  res.status(200).send("This is product API");
}

export function getProductById(req: Request, res: Response) {
  res.status(200).send("This is product edit API");
}

export function DeleteProductById(req: Request, res: Response) {
  res.status(200).send("Product deleted successfully.");
}

export function createProduct(
  req: Request<{}, {}, CreateProductSchema>,
  res: Response
) {}
