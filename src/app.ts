import express from 'express';
import { userInfoValidation, loginValidation } from './middleware/loginValidation';
import getAllOrdersController from './controllers/orders.controller';
import { 
  getAllProductsController,
  createProductController,
} from './controllers/products.controller';
import { createUserController, login } from './controllers/users.controller';

const app = express();

app.use(express.json());

app.post('/login', userInfoValidation, loginValidation, login);

app.post('/products', createProductController);
app.get('/products', getAllProductsController);

app.post('/users', createUserController);

app.get('/orders', getAllOrdersController);

export default app;
