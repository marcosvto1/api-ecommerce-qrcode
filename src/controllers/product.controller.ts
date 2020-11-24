import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from 'express'
import ProductRepository from '../repository/product.repository';

@Controller('products')
export class ProductController {
  @Get(':id')
  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    const product = await ProductRepository.getById(parseInt(id));
    if (!product) {
      res.sendStatus(404);
    } else {
      res.status(200).json(product);
    }
  }

  @Get()
  async getAllProducts(req: Request, res: Response) {
    res.status(200).json(await ProductRepository.getAll());
  }
}