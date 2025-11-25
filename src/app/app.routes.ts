import { Routes } from '@angular/router';
import {TaskList} from './task-list/task-list';
import {HomeComponent} from './home-component/home-component';
import {TaskDetail} from './task-detail/task-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TaskList },
  { path: 'task/:idx', component: TaskDetail },

];
