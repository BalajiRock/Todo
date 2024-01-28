import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [NgClass],
  inputs:[],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  @Input('Todo')
  todo: Todo = new Todo;
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  @Output() markDone:EventEmitter<Todo> = new EventEmitter();
  constructor(){
    console.log(this.todo.sno);
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("deleted")
  }
  strick(todo:Todo){
    this.markDone.emit(todo);
    console.log(todo)
  }
}
