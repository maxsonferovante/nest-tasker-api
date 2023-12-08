import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
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
      const result = await service.create(task)

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
});
