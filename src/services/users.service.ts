import { createUserModel, getUserByIdModel } from '../models/users.model';
import { User } from '../interfaces/users.interface';

export const createUserService = async (
  { username, password, level, vocation }:User,
):Promise<number> => {
  const id = await createUserModel({ username, password, level, vocation });
  return id;
};

export const getUserByIdService = async (username: string) => {
  const user = await getUserByIdModel(username);
  return user;
};