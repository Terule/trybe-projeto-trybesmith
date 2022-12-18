import { ResultSetHeader } from 'mysql2';
import { User } from '../interfaces/users.interface';
import connection from './connection';

export const createUserModel = async (
  { username, password, level, vocation }:User,
):Promise<number> => {
  const query = `INSERT INTO Trybesmith.users (username, password, level, vocation) VALUES
  (?, ?, ?, ?)`;
  const values = [username, password, level, vocation];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  return result.insertId;
};

export const x = async () => {};