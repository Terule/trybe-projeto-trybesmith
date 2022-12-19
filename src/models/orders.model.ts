import { RowDataPacket } from 'mysql2';
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

export const x = () => {};