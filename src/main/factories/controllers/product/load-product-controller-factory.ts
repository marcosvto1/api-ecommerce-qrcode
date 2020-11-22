import { ProductPrismaRepository } from './../../../../infra/dbPrima/product-prima.repository';
import { LoadProductController } from './../../../../presentation/controllers/load-product-controller';
import { ProductDbMockRepository } from './../../../../infra/dbMock/product-dbmock.repository';
import { DbLoadAccountById } from './../../../../data/usecases/load-product-by-id/db-load-product-by-id';
import { Controller } from '../../../../presentation/protocols/controller';

export const makeLoadProductController = (): Controller => {
  //const productRepository = new ProductDbMockRepository();
  const productPrismaRepository = new ProductPrismaRepository();
  const dbLoadAccountByUseCase = new DbLoadAccountById(productPrismaRepository);
  return new LoadProductController(dbLoadAccountByUseCase);
}