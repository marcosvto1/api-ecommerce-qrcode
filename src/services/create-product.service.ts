import { products, productsCreateInput } from '@prisma/client';
import { CreateSlugService } from './create-slug.service';
import productRepository from '../repository/product.repository';

export class CreateProductService {
  async create(productData: any): Promise<products> {
    const slugService = new CreateSlugService();
    if ((productData.slug == null || productData.slug == '') && productData.name !== ''){
      productData.slug = slugService.create(productData.name).toLowerCase();
    }
    
    return await productRepository.create(this.mapperProductDataToProductsCreateInput(productData));
  }

  private mapperProductDataToProductsCreateInput(productData): productsCreateInput {
    return {
      name: productData.name,
      description: productData.description,
      photoUrl: productData.photoUrl,
      price: productData.price,
      slug: productData.slug,
      qtdStock: productData.qtdStock,
      group: {
        connect: {
          id: productData.groupId
        }
      }
    }
  }
}