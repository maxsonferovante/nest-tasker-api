import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService, PrismaService],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {

    it('should create a task', async () => {
      const task = {
        title: 'Test task',
        description: 'Test description',
        done: false,
      };
      await service.create(task)
      expect(service.create).toBeDefined();
    });

    it('should create a task without description', async () => {
      const task = {
        title: 'Test task',
        description: '',
        done: false,
      };
      await service.create(task)
      expect(service.create).toBeDefined();
    });

    it('should create a task without done', async () => {
      const task = {
        title: 'Test task',
        description: 'Test description',
        done: false,
      };
      await service.create(task)
      expect(service.create).toBeDefined();
    });
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const result = await service.findAll()
      expect(result).toEqual(expect.any(Array));
    });

  });

  describe('findOne', () => {
    it('should return a task', async () => {

      const tasks = await service.findAll()
      const selectedTask = tasks[0]

      const result = await service.findOne(selectedTask.id)

      expect(result).toEqual(expect.any(Object));
    });

    it('should return an error', async () => {
      const result = await service.findOne('1')
      expect(result).toEqual(new Error('Error getting task'));
    });

  });
});
