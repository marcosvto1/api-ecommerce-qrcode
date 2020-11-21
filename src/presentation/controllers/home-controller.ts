import { ok } from '../helpers/http/http-helper';
import { HttpRequest, HttpResponse } from '../protocols';
import { Controller } from './../protocols/controller';

export class HomeController implements Controller{
  handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return Promise.resolve(ok({
      message: 'ok'
    }));
  }
}