import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  newTodo: string;
  todos: any;
  todoO: any;

  constructor() {
    this.newTodo = '';
    this.todos = [];
  }

  addTodo(event: any) {
    this.todoO = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoO);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index: any) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

}
