import { PrismaClient, products } from '@prisma/client'

const prisma = new PrismaClient();

function getById(id: number) {
  return prisma.products.findOne({
    where: {id}
  })
}

function getAll() {
  return prisma.products.findMany();
} 

async function create(data: products): Promise<products> {
  const product = await prisma.products.create({
    data
  });
  return product;
}

export default {
  getById,
  getAll,
  create
}