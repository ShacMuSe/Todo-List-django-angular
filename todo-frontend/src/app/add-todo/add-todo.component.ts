import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  todoTitle: string = '';

  constructor(private todoService: TodoService) { }

  addTodo() {
    if (this.todoTitle.trim()) {
      this.todoService.addTodo({ title: this.todoTitle }).subscribe(
        todo => {
          console.log('Todo added successfully: ', todo);
          this.todoTitle = ''; // Clear input field
        },
        error => console.error('Error adding todo: ', error)
      );
    }
  }
}
