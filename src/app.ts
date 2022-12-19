import express from 'express';
import { userInfoValidation, loginValidation, validateToken } from './middlewares/loginValidation';
import { createOrderController, getAllOrdersController } from './controllers/orders.controller';
import { 
  getAllProductsController,
  createProductController,
} from './controllers/products.controller';
import { createUserController, login } from './controllers/users.controller';
import { amountValidation, idsValidation, nameValidation } from './middlewares/productValidation';
import {
  levelValidation,
  passwordValidation,
  usernameValidation,
  vocationValidation,
} from './middlewares/userValidation';

const app = express();

app.use(express.json());

app.post('/login', userInfoValidation, loginValidation, login);

app.post(
  '/products',
  nameValidation,
  amountValidation,
  createProductController,
);
app.get('/products', getAllProductsController);

app.post(
  '/users',
  usernameValidation,
  vocationValidation,
  passwordValidation,
  levelValidation,
  createUserController,
);

app.get('/orders', getAllOrdersController);
app.post('/orders', validateToken, idsValidation, createOrderController);

export default app;
