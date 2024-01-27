import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../todo';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  title:String ;
  desc:String ;

  @Output() addTodo:EventEmitter<Todo> = new EventEmitter();
  onSubmit(){
    const todo ={
      sno:6,
      title:this.title,
      desc:this.desc,
      active:true
    }

  this.addTodo.emit(todo);

  }
}
