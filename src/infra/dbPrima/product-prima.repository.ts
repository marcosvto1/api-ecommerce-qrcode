import { ProductModel } from '../../domain/models/product.model';
import { LoadProductByIdRepository } from './../../data/protocols/db/product/load-product-by-id-repository';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export class ProductPrismaRepository implements LoadProductByIdRepository {
 async loadById(id: number): Promise<ProductModel> {
    const product: ProductModel = await prisma.products.findOne({
      where: {id: id},
      include: {group: true}
    });
    return product;
  }
}