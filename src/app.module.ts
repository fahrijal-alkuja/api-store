import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, ProfileModule, ProductModule],
})
export class AppModule { }
