import { Request, Response } from 'express';
import { Product } from '../interfaces/products.interface';
import { createProductService, getAllProductsService } from '../services/products.service';

export const createProductController = async (req: Request, res: Response):Promise<void> => {
  const { name, amount }:Product = req.body;
  const product = await createProductService({ name, amount });
  res.status(201).json(product);
};
export const getAllProductsController = async (_req: Request, res: Response):Promise<void> => {
  const products = await getAllProductsService();
  res.status(200).json(products);
};