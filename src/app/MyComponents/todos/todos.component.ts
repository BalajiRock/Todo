import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common'
import { TodoItemsComponent } from '../todo-items/todo-items.component';

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [CommonModule, TodoItemsComponent],
    schemas:[NO_ERRORS_SCHEMA]
})
export class TodosComponent  {
  public todos:Todo[];
  constructor(){
    this.todos = [
      {
        sno:1,
        title:"title1",
        decs:"decription",
        active:true
      },
      {
        sno:2,
        title:"title2",
        decs:"decription",
        active:true
      },
      {
        sno:3,
        title:"title3",
        decs:"decription",
        active:true
      }
    ]
  }
  deleteTodo(todo:Todo){
    console.log(todo)
    const idx = this.todos.indexOf(todo)

    if(idx>-1)
    {
      this.todos.splice(idx,1)
    }

  }
}
