import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  editMode: { [key: number]: boolean } = {};
  editText: { [key: number]: string } = {};
  
  constructor(public todoService: TodoService) {}

  delete(id: number) {
    this.todoService.deleteTodo(id);
  }

  edit(id: number) {
    this.editMode[id] = true;
  }

  save(id: number) {
    if (this.editText[id].trim()) {
      this.todoService.updateTodo(id, this.editText[id].trim());
      this.editMode[id] = false;
    }
  }

  cancelEdit(id: number) {
    this.editMode[id] = false;
  }
  
  
}
