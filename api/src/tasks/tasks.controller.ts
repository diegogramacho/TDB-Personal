import { 
  Controller, Get, Post, Body, Patch, Param, Delete, 
  UseGuards, Req 
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  async create(@Body() createTaskDto: CreateTaskDto, @Req() req: any) {
    const userId = req.user.sub;
    return await this.tasksService.create({ ...createTaskDto, userId });
  }

  @UseGuards(AuthGuard)
  @Get('')
  async findAll(@Req() req: any) { 
    const userId = req.user.sub; 
    return await this.tasksService.findAll(userId);
  }

  @UseGuards(AuthGuard)
  @Get('/get/:id')
  async findOne(@Param('id') id: string, @Req() req: any) {
    const userId = req.user.sub;
    return await this.tasksService.findOne(id, userId);
  }

  @UseGuards(AuthGuard)
  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Req() req: any
  ) {
    const userId = req.user.sub;
    return await this.tasksService.update(id, updateTaskDto, userId);
  }

  @UseGuards(AuthGuard)
  @Delete('/delete/:id')
  async remove(@Param('id') id: string, @Req() req: any) {
    const userId = req.user.sub;
    return await this.tasksService.remove(id, userId);
  }
}
