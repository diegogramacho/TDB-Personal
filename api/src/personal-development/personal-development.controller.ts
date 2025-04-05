import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { PersonalDevelopmentService } from './personal-development.service';
import { CreatePersonalDevelopmentDto } from './dto/create-personal-development.dto';
import { UpdatePersonalDevelopmentDto } from './dto/update-personal-development.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('personal-development')
export class PersonalDevelopmentController {
  constructor(private readonly personalDevelopmentService: PersonalDevelopmentService) {}

  @UseGuards(AuthGuard)
  @Post('/create')
    async create(@Body() createPersonalDevelopmentDto: CreatePersonalDevelopmentDto, @Req() req: any) {
      const userId = req.user.sub;
      return await this.personalDevelopmentService.create({ ...createPersonalDevelopmentDto, userId });
   }

  @UseGuards(AuthGuard)
  @Get('')
  async findAll(@Req() req: any) {
    const userId = req.user.sub;
    return this.personalDevelopmentService.findAll(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req: any) {
    const userId = req.user.sub;
    return this.personalDevelopmentService.findOne(id, userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalDevelopmentDto: UpdatePersonalDevelopmentDto) {
    return this.personalDevelopmentService.update(id, updatePersonalDevelopmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalDevelopmentService.remove(id);
  }
}
