import { PrismaClient, products } from '@prisma/client'
import { product } from '../model/product'

const prisma = new PrismaClient();

function getById(id: number) {
  return prisma.products.findOne({
    where: {id}
  })
}

function getAll() {
  return prisma.products.findMany();
}

async function create(data: product): Promise<products> {
  const product = await prisma.products.create({
    data
  });
  return product;
}

async function updateQtd(productId: number, quantity: number): Promise<products> {
  let product = await getById(productId)
  product.qtdStock -= quantity

  const updatedProduct = await prisma.products.update({
    where: {id: productId},
    data: product
  })

  return updatedProduct
}

export default {
  getById,
  getAll,
  create,
  updateQtd
}
