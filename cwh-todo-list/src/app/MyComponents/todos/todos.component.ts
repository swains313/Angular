import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { style } from '@angular/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];

  constructor() {
    const localItem = localStorage.getItem("todos");
    if (localItem === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(localItem);
    }
  }

  ngOnInit(): void {
    // Initialization logic can be placed here
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    console.log("toggle todo triggered");
    const index = this.todos.indexOf(todo);
    this.todos[index].active= !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
  }
}
