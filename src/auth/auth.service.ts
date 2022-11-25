import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto'
import { SignUp } from './dto/signup.dto';
@Injectable()
export class AuthService {
    constructor(
        private auth: PrismaService,
        private jwtService: JwtService,
    ) { }

    hashData(password: string) {
        return bcrypt.hash(password, 10);
    }

    async signup(dto: SignUp) {
        const { name, email, password, rules } = dto;
        const hashedPassword = await this.hashData(password);
        return await this.auth.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                rules,
            }
        })
    }
    async signin(dto: LoginDto) {
        const user = await this.auth.user.findUnique({
            where: {
                email: dto.email
            }
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }
        const isValid = await bcrypt.compare(dto.password, user.password)
        if (!isValid) {
            throw new UnauthorizedException('Invalid password');
        }
        return this.signinWithJwt(user);
    }

    signinWithJwt(user: any) {
        const payload = { email: user.email, sub: user.id, rules: user.rules };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    signout() { }
    refreshToken() { }
}
