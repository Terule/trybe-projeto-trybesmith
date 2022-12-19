import { Request, Response } from 'express';
import { User } from '../interfaces/users.interface';
import { createToken } from '../auth/tokenFunctions';
import { createUserService } from '../services/users.service';

export const createUserController = async (req: Request, res: Response) => {
  const user: User = req.body;
  const id = await createUserService(user);
  delete user.password;
  const token = createToken({ id, ...user });
  res.status(201).json({ token });
};

export const login = (req: Request, res: Response) => {
  const { user }:{ user: User } = req.body;
  delete user.password;
  const token = createToken(user);
  res.status(200).json({ token });
};