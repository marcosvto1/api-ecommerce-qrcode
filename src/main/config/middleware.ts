import { contentType } from './../middlewares/content-type';
import { cors } from './../middlewares/cors';
import { bodyParse } from './../middlewares/body-parse';
import { Express } from 'express'

export default (app: Express): void => {

  app.use(bodyParse)
  app.use(cors);
  app.use(contentType)
}