import { GroupModel } from './group.model';

export interface ProductModel {
  id: number,
  name: string;
  description: string;
  price: number;
  group?: GroupModel
} 