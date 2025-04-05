import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post, Res } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    
    @Inject()
    private readonly authService: AuthService

    @Post('signin')
    async signin(@Body() params: Prisma.UserCreateInput, @Res() res: Response) {
    const user = await this.authService.signin(params);

    res.cookie('token', user.access_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
    });

    res.send({ message: 'Login done successfully!' });
}
}
