import { Injectable } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create.task.dto';
import { Task } from './task.model';

@Injectable()
export class TaskService {
    private tasks: Task[] = [];
    sendInfo(createTaskDTO: CreateTaskDTO) {

        console.log(createTaskDTO.date)
        const berlinD = new Date(createTaskDTO.date);
        // if (berlinD.getHours() <= 12) {
        //     console.log("Berlin Date:" + berlinD.toDateString() + ` ${berlinD.getHours()}:` + `${berlinD.getMinutes()} AM`)
        // }
        // else {
        //     console.log("Berlin Date:" + berlinD.toDateString() + ` ${berlinD.getHours()}:` + `${berlinD.getMinutes()} PM`)
        // }
        const hrChicago = (berlinD.getHours() - 7 + 24) % 24;
        let chicagoD = new Date(createTaskDTO.date);
        if (berlinD.getHours() >= 7 && hrChicago <= 16) {
            chicagoD = new Date(`2022/11/22 ${hrChicago}:${berlinD.getMinutes()}`);
        }
        const chicagoDate = berlinD.getDate();
        console.log(chicagoDate)

        if (berlinD.getHours() < 7) {
            chicagoD = new Date(`2022/11/${chicagoDate- 1} ${hrChicago}:${berlinD.getMinutes()}`);
        }
        // if (chicagoD.getHours() <= 12) {
        //     console.log("Checago Date:" + chicagoD.toDateString() + ` ${chicagoD.getHours()}:` + `${chicagoD.getMinutes()} AM`)
        // } else {
        //     console.log("Checago Date:" + chicagoD.toDateString() + ` ${chicagoD.getHours()}:` + `${chicagoD.getMinutes()} PM`)
        // }

        this.tasks.push({

            date: chicagoD.toDateString(),
            time: chicagoD.getHours()+":"+chicagoD.getMinutes(),
            fromlocation: createTaskDTO.fromlocation,
            tolocation: createTaskDTO.tolocation
        })
        // console.log(`${this.tasks[date]}`)

        return this.tasks
    }

    getInfo() {

        return this.tasks
    }




}
