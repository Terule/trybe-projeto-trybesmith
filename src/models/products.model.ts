import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces/products.interface';
import connection from './connection';

export const createProductModel = async ({ name, amount }: Product): 
Promise<number> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  console.log();
  return result.insertId;
};

export const getAllProductsModel = async (): Promise<Product[]> => {
  const query = 'SELECT id, name, amount, order_id as orderId FROM Trybesmith.products';
  const [products] = await connection
    .execute<RowDataPacket[] & Product[]>(query);
  return products;
};