import { ProductModel } from '../../domain/models/product.model';
import { LoadProductByIdRepository } from '../../data/protocols/db/product/load-product-by-id-repository';

export class ProductDbMockRepository implements LoadProductByIdRepository {
  async loadById(id: number): Promise<ProductModel> {
    return Promise.resolve({
      id: 1,
      name: 'Product 1',
      description: 'Desc product 12',
      price: 10,
      group: {id: 1, name: 'Iphone'}
    });
  }
}