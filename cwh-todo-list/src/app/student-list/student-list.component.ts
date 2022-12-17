import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
searchtext='';
data=[
  {name:"john",sname:"doe",email:"john@example.com"},
  {name:"mary",sname:"moe",email:"mary@example.com"},
  {name:"july",sname:"duleye",email:"july@.com"},
]
}
