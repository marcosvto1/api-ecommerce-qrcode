import { LoadProductByIdRepository } from './../../protocols/db/product/load-product-by-id-repository';
import { ProductModel } from '../../../domain/models/product.model';
import { LoadProductById } from './../../../domain/product/load-product-by-id';
export class DbLoadAccountById implements LoadProductById {
  
  constructor(
    private readonly loadProductByIdRepository: LoadProductByIdRepository
  ) {}

  async load(id: number): Promise<ProductModel> {
    const product = await this.loadProductByIdRepository.loadById(id);
    return product;
  }
}