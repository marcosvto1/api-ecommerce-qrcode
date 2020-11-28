import { products, productsCreateInput } from "@prisma/client";

export interface product{
  description: string
  name: string
  slug: string
  price: number
  qtdStock: number,
  groupId: number
}
