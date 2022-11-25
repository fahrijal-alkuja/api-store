import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUp } from './dto/signup.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    getMe(@Request() req) {
        return req.user;
    }

    @Post('signup')
    signup(@Body() dto: SignUp) {
        return this.authService.signup(dto);
    }

    @Post('signin')
    signin(@Body() dto: LoginDto) {
        return this.authService.signin(dto);
    }

    @Post('signout')
    signout() {
        return this.authService.signout();
    }

    @Post('refresh')
    refreshToken() {
        return this.authService.refreshToken();
    }
}
