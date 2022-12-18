import { Product } from '../interfaces/products.interface';
import { createProductModel, getAllProductsModel } from '../models/products.model';

export const createProductService = async ({ name, amount }: Product) => {
  const id = await createProductModel({ name, amount });
  return { id, name, amount };
}; 

export const getAllProductsService = async () => {
  const products = await getAllProductsModel();
  return products;
};

export default { createProductService, getAllProductsService };