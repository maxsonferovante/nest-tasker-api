import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService, PrismaService],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a task', async () => {
      const task = {
        title: 'Test task',
        description: 'Test description',
        done: false,
      };
      const result = await controller.create(task);
      expect(result).toEqual({
        id: expect.any(String),
        ...task,
      });
    });

    it('should create a task without description', async () => {
      const task = {
        title: 'Test task',
        description: '',
        done: false,
      };

      const result = await controller.create(task);
      expect(result).toEqual({
        id: expect.any(String),
        ...task,
      });
    });

    it('should create a task without done', async () => {
      const task = {
        title: 'Test task',
        description: 'Test description',
        done: false,
      };

      const result = await controller.create(task);
      expect(result).toEqual({
        id: expect.any(String),
        ...task,
      });
    });
  });


  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([]);
    });

  });


  describe('findOne', () => {
    it('should return a task', async () => {
      const task = {
        title: 'Test task',
        description: 'Test description',
        done: false,
      };
      const result = await controller.create(task);
      const taskFound = await controller.findOne(result.id);
      expect(taskFound).toEqual(result);
    });
  });
});
