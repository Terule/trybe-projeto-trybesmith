import { NextFunction, Request, Response } from 'express';
import { getUserByIdService } from '../services/users.service';
import { Login } from '../interfaces/users.interface';
import { verifyToken } from '../auth/tokenFunctions';

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

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).send({ message: 'Token not found' });
    return;
  }
  try {
    const status = verifyToken(token);
    if (!status) {
      res.status(401).send({ message: 'Invalid token' });
      return;
    }
    req.body.user = status;
    next();
  } catch (err) {
    res.status(401).send({ message: 'Invalid token' });
  }
};