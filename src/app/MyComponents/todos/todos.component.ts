import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common'
import { TodoItemsComponent } from '../todo-items/todo-items.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [CommonModule, TodoItemsComponent,AddTodoComponent],
    schemas:[NO_ERRORS_SCHEMA]
})
export class TodosComponent  {
  todos:Todo[];
  localItem:string|null;
  constructor(){
    this.localItem = localStorage.getItem("todos");
    this.todos = []
    if(localStorage===null)
    {
    }
    else{
      this.todos = JSON.parse(this.localItem || "")
    }
  }
  deleteTodo(todo:Todo){
    console.log(todo)
    const idx = this.todos.indexOf(todo)

    if(idx>-1)
    {
      this.todos.splice(idx,1)
    }
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
