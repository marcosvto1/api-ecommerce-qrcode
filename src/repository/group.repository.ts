import { PrismaClient, groups } from '@prisma/client'
import { group } from '../model/group';
import { order } from '../model/order'

const prisma = new PrismaClient();

function getById(id: number) {
  return prisma.groups.findOne({
    where: {id}
  })
}

function getAll() {
  return prisma.groups.findMany();
}

async function create(data: group): Promise<groups> {
  const order = await prisma.groups.create({
    data
  });
  return order;
}

export default {
  getById,
  getAll,
  create
}
