import { Order } from '../interfaces/orders.inteface';
import { getAllOrdersModel } from '../models/orders.model';

const getAllOrdersService = async ():Promise<Order[]> => {
  const orders = await getAllOrdersModel();
  return orders;
};

export default getAllOrdersService;