import { createToken } from '../auth/tokenFunctions';
import { createUserModel } from '../models/users.model';
import { User } from '../interfaces/users.interface';

export const createUserService = async (
  { username, password, level, vocation }:User,
):Promise<string> => {
  const id = await createUserModel({ username, password, level, vocation });
  const token = createToken({ id, username, password, level, vocation });
  return token;
};

export const x = async () => {};