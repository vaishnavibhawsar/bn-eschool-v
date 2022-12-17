import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-todo-list';
  fontSizePx=0;

  name=""
 clearName() {
   this.name="";
 }
 
}
