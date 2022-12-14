import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';

export const createProductModel = async (name: string, amount: string): 
Promise<ResultSetHeader[]> => {
  const result = await connection.execute(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  console.log();
  return result as ResultSetHeader[];
};

export const getAllProductsModel = async (): Promise<RowDataPacket[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.products');
  return products as RowDataPacket[];
};