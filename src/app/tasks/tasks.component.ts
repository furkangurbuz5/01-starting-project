import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {type NewTaskData} from './task/task.model';
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksService} from "./tasks.service";

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

  constructor(private tasksService: TasksService){}

  get selectedUserTasks() {
    if(this.userId === undefined){
      return [];
    }
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    if(id === undefined){
      return;
    }
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    if(this.userId === undefined){
      return;
    }
    this.tasksService.addTask(taskData, this.userId);
  }
}
