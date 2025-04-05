import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonalDevelopmentDto } from './dto/create-personal-development.dto';
import { UpdatePersonalDevelopmentDto } from './dto/update-personal-development.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PersonalDevelopmentService {

  @Inject()
  private readonly prisma: PrismaService

  create(createPersonalDevelopmentDto: CreatePersonalDevelopmentDto) {
    return 'This action adds a new personalDevelopment';
  }

  async findAll(userId: string) {
    return await this.prisma.personalDevelopment.findMany({
      where: { userId },
      include: {
        user: { select: { id: true } },
      },    
    });
  }

  async findOne(id: string, userId: string) {
    const task = await this.prisma.personalDevelopment.findUnique({
      where: { id },
      include: {
        user: { select: { id: true } }, },
    });

    if (!task || task.userId !== userId) {
      throw new NotFoundException('Personal development register not found or access denied!');
    }

    return task;
  }



  async update(id: string, updatePersonalDevelopmentDto: UpdatePersonalDevelopmentDto, userId: string) {
    const result = await this.prisma.personalDevelopment.updateMany({
      where: {id , userId}, data: updatePersonalDevelopmentDto})

        if (result.count === 0) {
          throw new NotFoundException('Personal development register not found or access denied!');
        }

    return {message: 'Personal Development register updated successfully!'};
  }

  async remove(id: string, userId: string) {
    const result = await this.prisma.personalDevelopment.deleteMany({
      where: { id, userId }})

      if (result.count === 0) {
        throw new NotFoundException('Personal development register not found or access denied!');
      }
      return {message: 'Personal Development register removed successfully!'}
  }
}
