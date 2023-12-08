import { IsBoolean, IsEmpty, IsOptional, IsString } from 'class-validator';


export class CreateTaskDto {
    @IsEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsBoolean()
    done: boolean;
}
