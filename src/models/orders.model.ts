import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Order } from '../interfaces/orders.inteface';
import connection from './connection';

export const getAllOrdersModel = async ():Promise<Order[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & Order[]>(`
    SELECT O.id, U.id as userId, JSON_ARRAYAGG(P.id) AS productsIds
    FROM Trybesmith.orders AS O
    INNER JOIN Trybesmith.products AS P ON O.ID = P.order_id
    INNER JOIN Trybesmith.users AS U ON O.user_id = U.id
    GROUP BY O.id
    ORDER BY O.id
  `);
  return orders;
};

export const createOrderModel = async (userId: number, productIds: number[]) => {
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.orders (user_id) VALUES (?);
  `, [userId]);
  productIds.forEach(async (id) => {
    await connection.execute(
      `
      UPDATE Trybesmith.products
      SET order_id = ? 
      WHERE id = ?`,
      [result.insertId, id],
    );
  });
  return result.insertId;
};