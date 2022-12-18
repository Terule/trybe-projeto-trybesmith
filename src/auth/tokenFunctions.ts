import jwt from 'jsonwebtoken';
import { User } from '../interfaces/users.interface';

const secret:string = process.env.JWT_SECRET || 'seuSegredo';
const tokenConfig:object = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export const createToken = (user: User):string => {
  const token = jwt.sign({ data: user }, secret, tokenConfig);
  return token;
};

export const validateToken = (token:string) => {
  const status = jwt.verify(token, secret);
  return status;
};