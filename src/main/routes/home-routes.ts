import { makeHomeController } from './../factories/controllers/home/home-controller-factory';
import { adaptRoute } from './../adapters/express-route-adapter';
import { Router } from "express";

export default (router: Router) => {
  router.get('/', adaptRoute(makeHomeController()));
}