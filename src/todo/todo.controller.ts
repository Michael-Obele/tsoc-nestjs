import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { UserEmail } from 'src/common/decorator/user-email.decorator';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }


  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTodoDto: CreateTodoDto, @UserEmail() userEmail: string) {
    console.log("output");
    return this.todoService.create(createTodoDto, userEmail);
  }

  @UseGuards(JwtAuthGuard)
  @Get(
  )
  async findAll(
    @UserEmail() userEmail: string
  ) {
    console.log("todo.controller.ts", userEmail)
    return this.todoService.findAll(userEmail);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
