import { Controller, Get, Post,Body } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create.task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private taskService:TaskService){

    }
     //post data 
     @Post()
     sendInfo(@Body() createTaskDTO:CreateTaskDTO){
        return this.taskService.sendInfo(createTaskDTO);
       


     }

     //get
     @Get() 
     getInfo(){
        return this.taskService.getInfo();

     }






}
