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


  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskservice: TaskService,
              public id : number,
              public task: Task,

) {
    this.id = Number(this.route.snapshot.paramMap.get('idx'))-1;
    this.task = this.taskservice.getTaskById(this.id)
  }

  public deleteTask() {
    this.taskservice.removeTask(this.id);
    this.router.navigate(['/tasks']);
  }

  public updateTask(id :number) {
    this.taskservice.updateTask(id);
  }

}
