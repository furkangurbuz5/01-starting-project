import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
// import {FormsModule} from "@angular/forms";
import {type NewTaskData} from "../task/task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [
  //   FormsModule
  // ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close: EventEmitter<void> = new EventEmitter();
  @Input({required: true}) userId?: string;
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  private tasksService = inject(TasksService);

  onCancel(): void {
    this.close.emit();
  }

  onSubmit() {
    if(this.userId === undefined) {
      return;
    }
    const taskData: NewTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }
    this.tasksService.addTask(taskData, this.userId);
    this.close.emit();
  }
}
