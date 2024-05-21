import { IsBoolean, IsEmpty, IsOptional, IsString } from 'class-validator';
import { Task } from '../entities/task.entity';

export class CreateTaskDto extends Task {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsBoolean()
    done: boolean;
}
