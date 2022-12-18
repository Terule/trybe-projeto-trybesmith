export type Login = {
  username: string,
  password: string
};

export type User = {
  id?: number,
  vocation: string,
  level: number,
} & Login;