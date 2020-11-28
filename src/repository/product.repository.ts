import { PrismaClient, products, productsCreateInput } from '@prisma/client'
import { product } from '../model/product'

const prisma = new PrismaClient();

function getById(id: number) {
  return prisma.products.findOne({
    where: {id},
    include: {group: true}
  })
}

function getAll() {
  return prisma.products.findMany(
    {
      include: {'group': true}
    }
  );
}

async function create(data: productsCreateInput): Promise<products> {
  const product = await prisma.products.create({
    data
  });
  return product;
}

async function updateQtd(productId: number, quantity: number): Promise<products> {
  let product = await getById(productId)
  const qtd = product.qtdStock - quantity

  const updatedProduct = await prisma.products.update({
    where: {id: productId},
    data: {qtdStock: qtd}
  })

  return updatedProduct
}

export default {
  getById,
  getAll,
  create,
  updateQtd
}
