import { Logger } from '@overnightjs/logger';
import { product } from './../model/product';
import { ordersCreateInput } from '@prisma/client';
import { CreateOrderService } from './../services/create-order.service';
import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from 'express'
import orderRepository from "../repository/order.repository";
import productRepository from "../repository/product.repository";

@Controller('orders')
export class OrderController {
  @Post()
  async createOrder(req: Request, res: Response) {
    try {
      const createOrderService = new CreateOrderService();
      const newOrder = await createOrderService.create(req.body);
      res.status(200).json(newOrder)
    } catch (error) {
      console.error(error)
      res.sendStatus(500)
    }
  }
}
