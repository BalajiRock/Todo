import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [],
  inputs:[],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  @Input('Todo')
  todo: Todo = new Todo;
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  constructor(){
    console.log(this.todo.sno);
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("deleted")
  }
}
