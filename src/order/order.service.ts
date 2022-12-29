import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {

  constructor(private dborder: PrismaService) { }

  async create(createOrderDto: CreateOrderDto) {

    return await this.dborder.order.create(
      {
        data: {
          ...createOrderDto,
        }
      }
    )
  }


  async findAll() {
    return await this.dborder.order.findMany({
      include: {
        product: true,
      }
    })
  }

  async findOne(id: number) {
    return await this.dborder.order.findUnique({
      where: { id },
      include: {
        product: true,
        user: true
      }

    })
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.dborder.order.update({
      where: { id },
      data: { ...updateOrderDto }
    })
  }

  async remove(id: number) {
    return await this.dborder.order.delete({
      where: { id }
    })
  }
}
