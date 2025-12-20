import {Injectable} from "@angular/core";
import {tasks} from "./tasks";
import {type NewTaskData, type Task} from './task/task.model';

@Injectable(
  {providedIn: "root"}
)
export class TasksService {

  private tasks = tasks;

  public getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId)
  }

  public addTask(taskData: NewTaskData, userId: string) {
    const task: Task = {
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    }
    this.tasks.push(task);
  }

  public removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

}
