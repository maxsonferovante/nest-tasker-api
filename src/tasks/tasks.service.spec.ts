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
      const result = await service.create(task)

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
      const result = await service.create(task)

      expect(result).toEqual({
        id: expect.any(String),
        ...task,
      });
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
      const task = {
        title: 'Test task',
        description: 'Test description',
        done: false,
      };
      const result = await service.findOne('1')
      if ('id' in result) {
        // Agora o TypeScript sabe que 'result' é um 'Task'
        const result2 = await service.findOne(result.id)
        expect(result2).toEqual({
          id: expect.any(String),
          ...task,
        });
      } else {
        // 'result' deve ser um 'Error'
        expect(result).toEqual(Error('Task not found'));
      }
    });

    it('should return an error', async () => {
      const result = await service.findOne('1')
      expect(result).toEqual(Error('Task not found'));
    });

  });
});
