import { Component } from '@angular/core';
import { Todo }from "../../todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
     todos : Todo[] | undefined;
     constructor(){ }

}
