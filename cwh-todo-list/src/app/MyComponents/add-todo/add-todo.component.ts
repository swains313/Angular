import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit{

  @Output() todoAdd: EventEmitter<Todo>=new EventEmitter

  title:string;
  desc:string ;

  constructor(){
    this.title='';
    this.desc='';
  }
  ngOnInit(): void {
   
  }

  onSubmit(){

    const todo={
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);

  }

}
