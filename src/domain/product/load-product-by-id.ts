import { ProductModel } from './../models/product.model';

export interface LoadProductById {
  load(id: number): Promise<ProductModel>;
}