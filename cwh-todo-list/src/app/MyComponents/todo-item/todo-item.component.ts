import { Todo } from './../../Todo';
import { Component, Input, OnInit ,Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {


  onClick(todo:Todo) {
    console.log("consolde triggered")
    this.todoDelete.emit(todo);
}


  @Input()todo!: Todo  ;
  @Input()i!: number  ;


  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter
  @Output() todoCheckBox: EventEmitter<Todo>=new EventEmitter




  constructor(){

  }
  ngOnInit(): void {
  }

  onCheckBoxClick(todo: Todo) {
    this.todoCheckBox.emit(todo);

  }

}
