import { Request, Response } from 'express';
import { User } from '../interfaces/users.interface';
import { createOrderService, getAllOrdersService } from '../services/orders.service';

export const getAllOrdersController = async (_req:Request, res: Response):Promise<void> => {
  const orders = await getAllOrdersService();
  res.status(200).json(orders);
};

export const createOrderController = async (req:Request, res: Response) => {
  const { data }: { data: User } = req.body.payload;
  const { productsIds }: { productsIds: number[] } = req.body;
  if (!data.id) return;
  const result = await createOrderService(data.id, productsIds);
  res.status(201).json(result);
};