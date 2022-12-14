import express from 'express';
import { 
  getAllProductsController,
  createProductController,
} from './controllers/products.controller';

const app = express();

app.use(express.json());

app.post('/products', createProductController);
app.get('/products', getAllProductsController);

export default app;
