import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: {id: number, text: string }[] = [] // declaring todo object that stores into an array.
  idCounter = 0; //generates a unique id for each todo item

  constructor() { }

  //adds todo to list
  addTodo(text: string) {
    this.todos.push({ id: this.idCounter++, text }) //pushing id and text to an array
  }

  /*
  this todo deletes a todo list

- this.todos: Refers to the todos array in the 
TodoService class, which holds all the to-do items.

- this.todos.filter(...): filter is an array method 
that creates a new array with all elements that pass 
the test implemented by the provided function.

- todo => todo.id !== id: This is an arrow function 
(a type of anonymous function) used as the test for filter.
It takes each todo object in the todos array and checks if
its id is not equal to the id parameter passed to the
deleteTodo method.
  */
  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  /*
this function edit's the todo list

- this.todos.find(...): The find method on the 
todos array searches for the first element that 
satisfies the provided testing function.

- todo => todo.id === id: This is an arrow function 
used as the testing function for find. It takes each 
todo object in the todos array and checks if its id 
is equal to the id parameter passed to the updateTodo 
method.

  */
  updateTodo(id: number, newText: string) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.text = newText;
    }
  }
}
