import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Task, TaskService} from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {
  id : number
  task: Task

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskservice: TaskService,


) {
    this.id = Number(this.route.snapshot.paramMap.get('idx'));
    this.task = this.taskservice.getTaskById(this.id)
  }

  public deleteTask() {
    this.taskservice.removeTask(this.id);
    this.router.navigate(['/tasks']);
  }

  public updateTask(id :number) {
    this.task.isfinish = !this.task.isfinish
    this.taskservice.updateTask(id);
  }

}
