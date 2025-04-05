import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.prisma.task.create({
      data: createTaskDto,
    });
  }

  async findAll(userId: string) {
    return await this.prisma.task.findMany({
      where: { userId },
      include: {
        subTasks: true,
        
      },
    });
  }

  async findOne(id: string, userId: string) {
    
    const task = await this.prisma.task.findUnique({
      where: { id, userId },
      include: {
        subTasks: true,
      },
    });

    if (!task) {
      throw new NotFoundException('Tarefa não encontrada ou acesso negado');
    }
    
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto, userId: string) {
    const result = await this.prisma.task.updateMany({
      where: { id, userId },
      data: updateTaskDto,
    });

    if (result.count === 0) {
      throw new NotFoundException('Tarefa não encontrada ou acesso negado');
    }
    
    // Opcional: retornar a tarefa atualizada (A decidir)
    //  return await this.findOne(id, userId);
  }

  async remove(id: string, userId: string) {
    const result = await this.prisma.task.deleteMany({
      where: { id, userId },
    });

    if (result.count === 0) {
      throw new NotFoundException('Tarefa não encontrada ou acesso negado');
    }
    return { message: 'Tarefa removida com sucesso' };
  }
}
