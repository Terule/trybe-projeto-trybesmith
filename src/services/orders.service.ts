import { Order } from '../interfaces/orders.inteface';
import { createOrderModel, getAllOrdersModel } from '../models/orders.model';

export const getAllOrdersService = async ():Promise<Order[]> => {
  const orders = await getAllOrdersModel();
  return orders;
};

export const createOrderService = async (userId:number, productsIds: number[]) => {
  await createOrderModel(userId, productsIds);
  return { userId, productsIds };
};