import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private dbproduct: PrismaService) { }

  async create(createProductDto: CreateProductDto) {
    return await this.dbproduct.product.create(
      {
        data: { ...createProductDto },
      }
    )
  }

  async findAll() {
    return await this.dbproduct.product.findMany()
  }

  async findOne(id: number) {
    return await this.dbproduct.product.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.dbproduct.product.update({
      where: { id },
      data: { ...updateProductDto }
    })
  }

  async remove(id: number) {
    return await this.dbproduct.product.delete({
      where: { id }
    })
  }
}
