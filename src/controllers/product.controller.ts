import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from 'express'
import ProductRepository from '../repository/product.repository';
import { product } from '../model/product'

@Controller('products')
export class ProductController {
  @Get(':id')
  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await ProductRepository.getById(parseInt(id));
      if (!product) {
        res.sendStatus(404);
      } else {
        res.status(200).json(product);
      }
    } catch (error) {
      res.sendStatus(500);
    }
  }

  @Get()
  async getAllProducts(_req: Request, res: Response) {
    try {
      const products = await ProductRepository.getAll()
      res.status(200).json(products);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  @Post()
  async createProduct(req: Request, res: Response) {
    const productData = req.body as product
    try {
      const newProduct = await ProductRepository.create(productData)
      res.status(200).json(newProduct)
    } catch (error) {
      res.sendStatus(500)
    }
  }
}
