import { serverError } from './../helpers/http/http-helper';
import { ok } from '../helpers/http/http-helper';
import { LoadProductById } from '../../domain/product/load-product-by-id';
import { HttpRequest, HttpResponse } from '../protocols/http';
import { Controller } from '../protocols/controller';
export class LoadProductController implements Controller {

  constructor(
    private readonly loadProductByIdUseCase: LoadProductById
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const product = await this.loadProductByIdUseCase.load(1);
      return ok(product);
    } catch(error) {    
      return serverError(error);  
    }
  }
}