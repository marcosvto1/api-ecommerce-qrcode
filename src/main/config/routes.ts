import { Router, Express } from 'express';
import homeRoutes from '../routes/home-routes';

export default (app: Express) => {
  const router = Router();

  app.use('/api', router);
  
  homeRoutes(router);
}