import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private readonly databaseService: DatabaseService) { }
  async create(createTodoDto: CreateTodoDto) {
    try {
      let data: Prisma.TodoCreateInput = {
        description: createTodoDto.description,
        task: createTodoDto.task,
        status: "ACTIVE"
      }
      console.log(data)
      return await this.databaseService.todo.create({ data });
    } catch (error) {
      console.error(error)
      return error
    }
  }

  async findAll() {
    return await this.databaseService.todo.findMany();
  }

  async findOne(id: number) {
    let data: Prisma.TodoWhereUniqueInput = {
      id
    }
    return await this.databaseService.todo.findFirst({
      where: {
        id: id
      }
    });
  }



  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.databaseService.todo.update({
      where: {
        id: id
      }, data: updateTodoDto
    });

  }

  async remove(id: number) {
    return await this.databaseService.todo.delete({
      where: {
        id: id
      }
    });
  }
}
