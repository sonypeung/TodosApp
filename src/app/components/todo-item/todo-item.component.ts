import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // Set dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  // On toggle
  onToggle(todo) {
    todo.completed = !todo.completed;
    this.todoService.completeTodo(todo).subscribe( todo => {
      console.log(todo);
    });
  }

  // On delete
  onDelete(todo) {
    console.log(todo);
  }

}
