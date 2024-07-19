import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateTodoDto } from './create-todo.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    status: TaskStatus;
}

enum TaskStatus {
    DONE = "DONE",
    ACTIVE = "ACTIVE"
}
