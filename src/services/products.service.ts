import { createProductModel, getAllProductsModel } from '../models/products.model';

export const createProductService = async (name: string, amount: string) => {
  const [result] = await createProductModel(name, amount);
  return { id: result.insertId, name, amount };
}; 

export const getAllProductsService = async () => {
  const products = await getAllProductsModel();
  return products;
}; 