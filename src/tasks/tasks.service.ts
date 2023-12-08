import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks = [];

  async create(createTaskDto: CreateTaskDto): Promise<Task | Error> {
    try {
      const newTask = new Task(createTaskDto);
      this.tasks.push(newTask);
      return newTask;
    } catch (error) {
      return Error('Error creating task');
    }
  }

  async findAll(): Promise<Task[] | Error> {
    try {
      return this.tasks.filter(Boolean);
    } catch (error) {
      return Error('Error getting tasks');
    }
  }

  async findOne(id: string) {
    try {
      const task = this.tasks.find((task) => task.id === id);
      if (!task) {
        return Error('Task not found');
      }
      return task;
    } catch (error) {
      return Error('Error getting task');
    }
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
