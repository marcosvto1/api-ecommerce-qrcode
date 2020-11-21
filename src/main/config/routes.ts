import { Router, Express } from 'express';
import homeRoutes from '../routes/home-routes';
import loadProductRoute from '../routes/load-product-routes';

export default (app: Express) => {
  const router = Router();

  app.use('/api', router);
  
  homeRoutes(router);
  loadProductRoute(router);
}