import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from 'express'
import orderRepository from "../repository/order.repository";
import productRepository from "../repository/product.repository";

@Controller('orders')
export class OrderController {
  @Post()
  async createOrder(req: Request, res: Response) {
    const { productId, quantity, freightPrice} = req.body

    const product = {
      connect: {id: productId}
    }

    const orderData = {product, quantity, freightPrice}

    try {

      const newOrder = await orderRepository.create(orderData)
      await productRepository.updateQtd(parseInt(productId), quantity)

      res.status(200).json(newOrder)
    } catch (error) {
      console.error(error)
      res.sendStatus(500)
    }
  }
}
