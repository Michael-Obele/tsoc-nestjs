import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { UserEmail } from 'src/common/decorator/user-email.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Todo')
@Controller('todo')

export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ description: "Create a new todo item", summary: "Create Todo Item" })
  create(@Body() createTodoDto: CreateTodoDto, @UserEmail() userEmail: string) {
    console.log("output");
    return this.todoService.create(createTodoDto, userEmail);
  }


  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ description: "Retrieve all todo items for the current user", summary: "Find All Todos" })
  async findAll(@UserEmail() userEmail: string) {
    console.log("todo.controller.ts", userEmail)
    return this.todoService.findAll(userEmail);
  }

  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ description: "Retrieve a specific todo item by ID", summary: "Find One Todo" })
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ description: "Update a specific todo item by ID", summary: "Update Todo" })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ description: "Delete a specific todo item by ID", summary: "Remove Todo" })
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
