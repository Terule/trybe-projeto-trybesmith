import { Request, Response } from 'express';
import getAllOrdersService from '../services/orders.service';

const getAllOrdersController = async (_req:Request, res: Response):Promise<void> => {
  const orders = await getAllOrdersService();
  res.status(200).json(orders);
};

export default getAllOrdersController;