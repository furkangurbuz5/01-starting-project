import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {tasks} from "./tasks";
import {type NewTaskData, type Task} from './task/task.model';
import {NewTaskComponent} from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId?: string;
  @Input({required: true}) userName?: string;

  protected isAddingTask: boolean = false;
  protected tasks = tasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    const task: Task = {
      id: new Date().getTime().toString(),
      userId: this.userId!,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    }
    this.tasks.push(task);
    this.isAddingTask = false;
  }
}
