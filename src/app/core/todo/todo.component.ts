import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from '../TodoService/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  listeTodo: Todo[] = [
    { "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false },
    { "userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false },
    { "userId": 1, "id": 3, "title": "fugiat veniamminus", "completed": false },
    { "userId": 1, "id": 4, "title": "quo adipisci enim quam ut  ab", "completed": true }];

  bilan: boolean = false;
  nbelement: any;
  constructor(private serviceTodo: TodoService) { }

  ngOnInit(): void {
    console.log(this.listeTodo);
  }

  getNumberofElement() {
    this.nbelement = this.serviceTodo.getNumberOf(this.listeTodo, "completed", false);
    this.bilan = !this.bilan;
    console.log(this.nbelement);
  }

}
