import { makeLoadProductController } from './../factories/controllers/product/load-product-controller-factory';
import { adaptRoute } from './../adapters/express-route-adapter';
import { Router } from 'express';


export default (route: Router) => {
  route.get('/product/:id', adaptRoute(makeLoadProductController()))
}