import { Component } from '@angular/core';
import { signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Task, TaskService} from '../task';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-task-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {


  titre : string = "Liste des tâches";
  newTask = signal('');
  tasks: Task[] = [];


  constructor( private taskserv: TaskService ) {
    this.tasks = this.taskserv.getTasks();


  }
  public addTask(){
    this.taskserv.addTask(this.newTask())
    this.tasks = this.taskserv.getTasks()
  }

  public deleteTask(id:number){
    this.taskserv.removeTask(id);
    this.tasks = this.taskserv.getTasks()
  }

  public updateTask(id:number){
    this.taskserv.updateTask(id);
    this.tasks = this.taskserv.getTasks()

  }

}
