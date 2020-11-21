import { ProductModel } from './../../../../domain/models/product.model';

export interface LoadProductByIdRepository {
  loadById(id: number): Promise<ProductModel>
}