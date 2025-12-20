import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {type NewTaskData} from "../task/task.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() add: EventEmitter<NewTaskData> = new EventEmitter();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';


  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit() {
    const taskData: NewTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }
    this.add.emit(taskData);
  }
}
