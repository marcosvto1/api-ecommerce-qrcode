import { ordersCreateInput } from '@prisma/client';
import orderRepository from '../repository/order.repository';
import productRepository from '../repository/product.repository';
export class CreateOrderService {
  async create(orderDataRequest: any) {
    const order = await orderRepository.create(this.mapperReqBodyToOrdersCreate(orderDataRequest));
    if (order) {
      if (orderDataRequest.orderProducts.length > 0) {
        await this.updateStockProducts(orderDataRequest.orderProducts);
      }
      return order;
    }
    return null;
  }

  private async updateStockProducts(orderProducts: any[]) {
    console.log(orderProducts);
    for (let item of orderProducts) {
      await productRepository.updateQtd(parseInt(item.productId), parseFloat(item.quantity))
    }
  }


  private mapperReqBodyToOrdersCreate(reqBody: any): ordersCreateInput {
    const {
      totalPrice,
      freightPrice,
      customerId,
      orderProducts
    } = reqBody;

    const orderData: ordersCreateInput = {
      totalPrice,
      freightPrice,
      customer: {
        connect: { id: customerId }
      },
      orderProducts: {
        create: [
          ...(orderProducts.map(item => ({ product: { connect: { id: item.productId } }, quantity: item.quantity })))
        ]
      }
    }

    return orderData;
  }
}