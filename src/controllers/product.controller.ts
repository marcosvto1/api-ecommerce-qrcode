import { productsCreateInput } from '@prisma/client';
import { Logger } from '@overnightjs/logger';
import { CreateProductService } from './../services/create-product.service';
import { Controller, Get, Post, Put } from "@overnightjs/core";
import { Request, Response } from 'express';
import ProductRepository from '../repository/product.repository';
import QRCode from 'qrcode';
import { UpdateProductService } from '../services/update-product.service';

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

  @Get('slug/:slug')
  async getProductBySlug(req: Request, res: Response) {
    const { slug } = req.params;
    try {
      const product = await ProductRepository.getBySlug(slug);
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

  @Put(':id')
  async updateProduct(req: Request, res: Response) {
    const {id} = req.params;
    const data = req.body;
    try {
      const service = new UpdateProductService();
      const product = await service.update(data, parseInt(id));
      res.status(200).json(product);
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
    try {
      const createProductService = new CreateProductService();
      const product = await createProductService.create(req.body);
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
