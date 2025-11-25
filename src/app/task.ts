import {Injectable, signal} from '@angular/core';

export interface Task {
  name: string;
  isfinish: boolean;

}
@Injectable({
  providedIn: 'root',
})


export class TaskService {

  newTask = signal('');

  tasks: Task[] =[];




  constructor() {
    if(localStorage.getItem('tasks')){
      this.tasks = this.getTasks()
    }
  }


  public addTask(name:string){
    const task = {
      name : name,
      isfinish : false
    }
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public removeTask(task : number){
    this.tasks.splice(task, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public updateTask(id:number){
    this.tasks[id].isfinish = !this.tasks[id].isfinish;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public getTasks(){
    const raw = localStorage.getItem('tasks');
    if (!raw) {
      return [];
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
        console.error('nop');
      return [];
    }
  }
  public getTaskById(id: number){
    let tasks = this.getTasks();
    return tasks[id]
  }
}






