import { NextFunction, Request, Response } from 'express';
import { getUserByIdService } from '../services/users.service';
import { Login } from '../interfaces/users.interface';

export const userInfoValidation = (req: Request, res: Response, next: NextFunction):void => {
  const { username, password }:Login = req.body;
  if (!username) {
    res.status(400).send({ message: '"username" is required' });
    return;
  }
  if (!password) {
    res.status(400).send({ message: '"password" is required' });
    return;
  }
  next();
};

export const loginValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const user = await getUserByIdService(username);
  if (!user) {
    res.status(401).send({ message: 'Username or password invalid' });
    return;
  }
  if (user.password !== password) {
    res.status(401).send({ message: 'Username or password invalid' });
    return;
  }
  req.body.user = user;
  next(); 
};