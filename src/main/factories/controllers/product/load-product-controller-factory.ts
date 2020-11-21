import { LoadProductController } from './../../../../presentation/controllers/load-product-controller';
import { ProductDbMockRepository } from './../../../../infra/dbMock/product-dbmock.repository';
import { DbLoadAccountById } from './../../../../data/usecases/load-product-by-id/db-load-product-by-id';
import { Controller } from '../../../../presentation/protocols/controller';

export const makeLoadProductController = (): Controller => {
  const productRepository = new ProductDbMockRepository()
  const dbLoadAccountByUseCase = new DbLoadAccountById(productRepository);
  return new LoadProductController(dbLoadAccountByUseCase);
}