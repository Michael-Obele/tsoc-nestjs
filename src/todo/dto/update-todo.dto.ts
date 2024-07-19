import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    @IsString()
    @IsOptional()
    status: TaskStatus;
}

enum TaskStatus {
    DONE = "DONE",
    ACTIVE = "ACTIVE"
}
