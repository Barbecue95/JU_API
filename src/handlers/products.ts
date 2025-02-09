import { Request, Response } from "express";
import { CreateProductDtos } from "../dtos/CreateProduct.dto";

export function getProducts(req: Request, res: Response) {
  res.status(200).send("This is product API");
}

export function getProductById(req: Request, res: Response) {
  res.status(200).send("This is product edit API");
}

export function createProduct(
  req: Request<{}, {}, CreateProductDtos>,
  res: Response
) {}
