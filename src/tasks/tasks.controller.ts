import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from "./DTO/create-task.dto";
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/Task";
// import { Request, Response } from "express";

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.taskService.getTasks();
    }
    // getTask(@Req() req, @Res() res) {
    //     return res.send('Hello world');
    // }

    @Get(":taskId")
    getTask(@Param("taskId") taskId: string) {
        return this.taskService.getTask(taskId);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): Promise<Task> {
        // console.log(task.title, task.description, task.done);
        return this.taskService.createTask(task);
    }

    @Delete(":id")
    deleteTask(@Param('id') id): string {
        console.log(id);
        return `Deleting a task ${id}`;
    }

    @Put(":id")
    updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
        console.log(task);
        console.log(id);
        return "Updating a task";
    }
}
