import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, ParseUUIDPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<any> {
    try {
      return await this.tasksService.create(createTaskDto);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: error.message || 'Error creating task',
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll(): Promise<any> {
    try {
      return await this.tasksService.findAll();
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: error.message || 'Error getting tasks',
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
    try {
      return await this.tasksService.findOne(id);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: error.message || 'Error getting task',
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
