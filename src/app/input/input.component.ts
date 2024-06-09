import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {

  todoText: string = '';

  constructor(private todoService: TodoService) {}
  
  /*
- addTodo(): Method to add a new to-do.
- if (this.todoText.trim()) { ... }: Checks if the input text is not empty after trimming whitespace.
- this.todoService.addTodo(this.todoText.trim()): Calls the service to add the new to-do.
- this.todoText = '';: Resets the input field.
  */
  addTodo() {
    if (this.todoText.trim()) {
      this.todoService.addTodo(this.todoText.trim());
      this.todoText = '';
    }
  }

}
