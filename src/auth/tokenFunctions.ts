import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../interfaces/users.interface';

const secret = 'asharabacontaia';
const tokenConfig:object = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export const createToken = (user: User):string => {
  const token = jwt.sign({ data: user }, secret, tokenConfig);
  return token;
};

export const verifyToken = (token:string) => {
  const status: string | JwtPayload = jwt.verify(token, secret);
  return status;
};