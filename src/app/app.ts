import { Component, signal } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
//ajout de notre composant dans le composant root (avec le import)
import { TaskList } from "./task-list/task-list";
import {HomeComponent} from './home-component/home-component';

@Component({
  selector: 'app-root',
  imports: [RouterModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('task-manager');
}



