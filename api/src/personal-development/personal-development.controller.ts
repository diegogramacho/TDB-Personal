import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalDevelopmentService } from './personal-development.service';
import { CreatePersonalDevelopmentDto } from './dto/create-personal-development.dto';
import { UpdatePersonalDevelopmentDto } from './dto/update-personal-development.dto';

@Controller('personal-development')
export class PersonalDevelopmentController {
  constructor(private readonly personalDevelopmentService: PersonalDevelopmentService) {}

  @Post()
  create(@Body() createPersonalDevelopmentDto: CreatePersonalDevelopmentDto) {
    return this.personalDevelopmentService.create(createPersonalDevelopmentDto);
  }

  @Get()
  findAll() {
    return this.personalDevelopmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalDevelopmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalDevelopmentDto: UpdatePersonalDevelopmentDto) {
    return this.personalDevelopmentService.update(+id, updatePersonalDevelopmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalDevelopmentService.remove(+id);
  }
}
