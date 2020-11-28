import { products, productsCreateInput } from '@prisma/client';
import { CreateSlugService } from './create-slug.service';
import productRepository from '../repository/product.repository';

export class CreateProductService {
  async create(productData: productsCreateInput): Promise<products> {
    const slugService = new CreateSlugService();
    if ((productData.slug == null || productData.slug == '') && productData.name !== ''){
      productData.slug = slugService.create(productData.name).toLowerCase();
    }
    return await productRepository.create(productData);
  }
}