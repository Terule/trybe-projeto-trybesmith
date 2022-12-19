import { NextFunction, Request, Response } from 'express';

export const nameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name }: { name: string } = req.body;
  if (!name) {
    res.status(400).send({ message: '"name" is required' });
    return;
  }
  if (typeof name !== 'string') {
    res.status(422).send({ message: '"name" must be a string' });
    return;
  }
  if (name.length < 3) {
    res.status(422).send({ message: '"name" length must be at least 3 characters long' });
    return;
  }
  next();
};

export const amountValidation = (req: Request, res: Response, next: NextFunction) => {
  const { amount }: { amount: string } = req.body;
  if (!amount) {
    res.status(400).send({ message: '"amount" is required' });
    return;
  }
  if (typeof amount !== 'string') {
    res.status(422).send({ message: '"amount" must be a string' });
    return;
  }
  if (amount.length <= 2) {
    res.status(422).send({ message: '"amount" length must be at least 3 characters long' });
    return;
  }
  next();
};