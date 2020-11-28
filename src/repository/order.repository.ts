import { PrismaClient, orders, ordersCreateInput } from '@prisma/client'
import { order } from '../model/order'

const prisma = new PrismaClient();

function getById(id: number) {
  return prisma.orders.findOne({
    where: {id}
  })
}

function getAll() {
  return prisma.orders.findMany();
}

async function create(data: ordersCreateInput): Promise<orders> {
  const order = await prisma.orders.create({
    data
  });
  return order;
}

export default {
  getById,
  getAll,
  create
}
