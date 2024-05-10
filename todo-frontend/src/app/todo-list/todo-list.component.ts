import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[]=[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(
      todos => this.todos = todos,
      error => console.error('Error fetching todos: ', error)
    );
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(
      () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
      error => console.error('Error deleting todo: ', error)
    );
  }
}
