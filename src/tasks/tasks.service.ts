import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createTaskDto: CreateTaskDto): Promise<any> {
    try {
      const task = await this.prisma.task.create({
        data: createTaskDto,
      });
      return task;
    } catch (error) {
      return new Error('Error creating task');
    }
  }

  async findAll(): Promise<any> {
    try {
      const tasks = await this.prisma.task.findMany();
      return tasks;
    } catch (error) {
      return new Error('Error getting tasks');
    }
  }

  async findOne(id: string) {
    try {
      const task = await this.prisma.task.findUniqueOrThrow({
        where: {
          id: id,
        },
      });
      return task;
    } catch (error) {
      return new Error('Error getting task');
    }
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      const task = this.prisma.task.update({
        where: {
          id: id,
        },
        data: updateTaskDto,
      });
      return task;
    } catch (error) {
      return new Error('Error updating task');
    }
  }

  remove(id: string) {
    try {
      const task = this.prisma.task.delete({
        where: {
          id: id,
        },
      });
      return task;
    }
    catch (error) {
      return new Error('Error deleting task');
    }
  }
}
