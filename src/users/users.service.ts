import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private dbUser: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return await this.dbUser.user.create(
      {
        data: {
          ...createUserDto,
          password: hashedPassword
        }
      }
    )
  }

  async findAll() {
    return await this.dbUser.user.findMany()
  }

  async findOne(id: number) {
    const user = await this.dbUser.user.findUnique({
      where: { id }
    })
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return await this.dbUser.user.findUnique({
      where: { id }
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
    const user = await this.dbUser.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return await this.dbUser.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        password: hashedPassword
      }
    })
  }

  async remove(id: number) {
    const user = await this.dbUser.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return await this.dbUser.user.delete({
      where: { id },
    })
  }
}
