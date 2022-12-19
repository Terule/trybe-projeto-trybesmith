import { NextFunction, Request, Response } from 'express';

export const usernameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username }: { username: string } = req.body;
  if (!username) {
    res.status(400).send({ message: '"username" is required' });
    return;
  }
  if (typeof username !== 'string') {
    res.status(422).send({ message: '"username" must be a string' });
    return;
  }
  if (username.length <= 2) {
    res.status(422).send({ message: '"username" length must be at least 3 characters long' });
    return;
  }
  next();
};

export const vocationValidation = (req: Request, res: Response, next: NextFunction) => {
  const { vocation }: { vocation: string } = req.body;
  if (!vocation) {
    res.status(400).send({ message: '"vocation" is required' });
    return;
  }
  if (typeof vocation !== 'string') {
    res.status(422).send({ message: '"vocation" must be a string' });
    return;
  }
  if (vocation.length <= 2) {
    res.status(422).send({ message: '"vocation" length must be at least 3 characters long' });
    return;
  }
  next();
};

export const levelValidation = (req: Request, res: Response, next: NextFunction) => {
  const { level }: { level: number } = req.body;
  if (level < 1 || level === 0) {
    res.status(422).send({ message: '"level" must be greater than or equal to 1' });
    return;
  }
  if (!level) {
    res.status(400).send({ message: '"level" is required' });
    return;
  }
  if (typeof level !== 'number') {
    res.status(422).send({ message: '"level" must be a number' });
    return;
  }
  next();
};

export const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password }: { password: string } = req.body;
  if (!password) {
    res.status(400).send({ message: '"password" is required' });
    return;
  }
  if (typeof password !== 'string') {
    res.status(422).send({ message: '"password" must be a string' });
    return;
  }
  if (password.length <= 8) {
    res.status(422).send({ message: '"password" length must be at least 8 characters long' });
    return;
  }
  next();
};