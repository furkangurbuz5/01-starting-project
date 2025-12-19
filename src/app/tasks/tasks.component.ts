import {Component, Input} from '@angular/core';
import { TaskComponent} from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userName?: string;
  tasks = [
    {
      id: 1,
      title: 'Learn angular at a professional level',
      summary: 'Learn the basic and advanced features of angular and how to apply them so that we can get a better job.',
      dueDate: '2026-03-31'
    }
  ]
}
