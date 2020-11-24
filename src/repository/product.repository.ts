import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

function getById(id: number) {
  return prisma.products.findOne({
    where: {id}
  })
}

function getAll() {
  return prisma.products.findMany();
} 

export default {
  getById,
  getAll,
}