import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private dbfrofile: PrismaService) { }

  async create(createProfileDto: CreateProfileDto) {
    return await this.dbfrofile.profile.create({
      data: {
        ...createProfileDto
      }
    })
  }

  async findAll() {
    return await this.dbfrofile.profile.findMany()
  }

  async findOne(id: number) {
    return await this.dbfrofile.profile.findUnique({
      where: { id }
    })
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    return await this.dbfrofile.profile.update({
      where: { id },
      data: {
        ...updateProfileDto
      }
    })
  }

  async remove(id: number) {
    return await this.dbfrofile.profile.delete({
      where: { id }
    })
  }
}
