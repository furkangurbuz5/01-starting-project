import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {tasks} from "./tasks"

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId?: string;
  @Input({required: true}) userName?: string;

  get selectedUserTasks() {
    return tasks.filter((task) => task.userId === this.userId)
  }

}
