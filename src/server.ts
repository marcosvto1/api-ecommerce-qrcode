import { ProductController } from './controllers/product.controller';
import * as bodyParser from 'body-parser';
import { Server } from "@overnightjs/core";
import { Logger } from '@overnightjs/logger';

export class SetupServer extends Server {

  constructor() {
    super(true);
    this.setupExpress();
    this.setupController();
  }
  private setupController(): void {
    this.addControllers([
      new ProductController()
    ]);
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json())
  }
  public start(port: number): void {
    this.app.listen(port, () => {
      Logger.Imp('Server listening on port: ' + port);
    })
  }
}