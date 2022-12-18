import { Request, Response } from 'express';
import { User } from '../interfaces/users.interface';
import { createUserService } from '../services/users.service';

const createUserController = async (req: Request, res: Response) => {
  const user: User = req.body;
  const token = await createUserService(user);
  res.status(201).json({ token });
};

export default createUserController;