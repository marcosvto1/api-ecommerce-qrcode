import { ProductController } from './controllers/product.controller';
import * as bodyParser from 'body-parser';
import { Server } from "@overnightjs/core";
import { Logger } from '@overnightjs/logger';
import { PrismaClient } from '@prisma/client';

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
 
  public async close() {
    const prisma = new PrismaClient();
    await prisma.$disconnect();
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      Logger.Imp('Server listening on port: ' + port);
    })
  }
}