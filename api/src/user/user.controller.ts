import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, ParseIntPipe, Patch, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from '@prisma/client'; 
import { AuthGuard } from 'src/auth/auth.guard';
import { ValidationPipe } from 'src/validation/validation.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {

    @Inject()
    private readonly userService: UserService

    @Post('')
    async signupUser(
        @Body(new ValidationPipe()) userData: CreateUserDto,
    ): Promise<UserModel> {
    return this.userService.createUser(userData);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id: string): Promise<Omit<UserModel, 'password'> | null> {
        return this.userService.findUser({ id });
    }

    @UseGuards(AuthGuard)
    @Patch('update/:id')
    async updateUser(
        @Body(new ValidationPipe()) userData: UpdateUserDto,
        @Param('id', ParseIntPipe) id: string,
        
        ): Promise<UserModel> {
            return this.userService.updateUser({where: {id}, data: userData})
        }
    
    @UseGuards(AuthGuard)
    @Delete('delete/:id')
    async deleteUser(@Param('id', ParseIntPipe) id : string): Promise<UserModel>{
        return this.userService.deleteUser({id})
    }
       
    @UseGuards(AuthGuard)
    @Get('me')
    async getMe(@Req() req: any): Promise<Omit<UserModel, 'password'> | null> {
      const userId = req.user?.id;
      if (!userId) throw new UnauthorizedException('User ID not found in token');
    
      return this.userService.findUser({ id: userId });
    }


}
