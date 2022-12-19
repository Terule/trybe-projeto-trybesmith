import express from 'express';
import getAllOrdersController from './controllers/orders.controller';
import { 
  getAllProductsController,
  createProductController,
} from './controllers/products.controller';
import createUserController from './controllers/users.controller';

const app = express();

app.use(express.json());

app.post('/products', createProductController);
app.get('/products', getAllProductsController);

app.post('/users', createUserController);

app.get('/orders', getAllOrdersController);

export default app;
