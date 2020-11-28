import { productsCreateInput } from '@prisma/client';
import { Logger } from '@overnightjs/logger';
import { CreateProductService } from './../services/create-product.service';
import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from 'express';
import ProductRepository from '../repository/product.repository';
import { product } from '../model/product';
import QRCode from 'qrcode';

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
      console.error(error)
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
    const productData = req.body as productsCreateInput;
    try {
      const createProductService = new CreateProductService();
      const product = await createProductService.create(productData);
      return res.status(200).json(product)
    } catch (error) {
      Logger.Err(error);
      res.sendStatus(500);
    }
  }

  @Post("qrcode")
  generateQRCode(req: Request, res: Response) {
    const { productId } = req.body
    const productURL = `localhost:3000/products/${productId}`
    try {
      QRCode.toDataURL(productURL, function (err, url) {
        if (err) console.error(err)
        res.status(200).json({qrcode: url})
      })
    } catch (error) {
      res.sendStatus(500)
    }
  }
}
