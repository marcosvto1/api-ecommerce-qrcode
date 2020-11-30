import { product } from './../model/product';
import { products, productsCreateInput } from '@prisma/client';
import { CreateSlugService } from './create-slug.service';
import productRepository from '../repository/product.repository';

export class UpdateProductService {
  async update(productData: any, productId: number): Promise<products> {
    const slugService = new CreateSlugService();
    if ((productData.slug == null || productData.slug == '') && productData.name !== '') {
      productData.slug = slugService.create(productData.name).toLowerCase();
    }

    return await productRepository.update(productId, this.mapperProductDataToProductsUpdateInput(productData),);
  }

  private mapperProductDataToProductsUpdateInput(productData): productsCreateInput {
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