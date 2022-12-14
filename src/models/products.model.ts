import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';

export const createProduct = async (name: string, amount: string): Promise<ResultSetHeader[]> => {
  const result = await connection.execute(
    'INSERT INTO products VALUES (?, ?)',
    [name, amount],
  );
  console.log();
  return result as ResultSetHeader[];
};

export const getAllProducts = async (): Promise<RowDataPacket[]> => {
  const products = await connection.execute('SELECT * FROM products');
  return products as RowDataPacket[];
};