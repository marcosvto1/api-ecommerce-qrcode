import { Controller } from '../../../../presentation/protocols';
import { HomeController } from './../../../../presentation/controllers/home-controller';

export const makeHomeController = (): Controller => {
  return new HomeController()
}