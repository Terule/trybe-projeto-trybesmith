import { Request, Response } from 'express';
import { createProductService, getAllProductsService } from '../services/products.service';

export const createProductController = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const result = await createProductService(name, amount);
  res.status(201).json(result);
};
export const getAllProductsController = async (_req: Request, res: Response) => {
  const products = await getAllProductsService();
  res.status(200).json(products);
};