import {  Component , OnInit} from '@angular/core';
import { Router, ActivatedRoute , ParamMap } from '@angular/router';


@Component({
  selector: 'app-s-loginform',
  templateUrl: './s-loginform.component.html',
  styleUrls: ['./s-loginform.component.css']
})
export class SLoginformComponent implements OnInit{
  public c =false;
  Name='';
  Password='';
  constructor(private router :Router ,  private route: ActivatedRoute ){ 
  
  }
  ngOnInit() {
   
  }
  

  login(){
    console.log("login works");
    debugger
    this.c = true;
   
    if(this.Name=='Admin' && this.Password=='Admin@123'){
      console.log("itss hurryee");
       this.Name='';
      this.Password='';
      this.router.navigate(['/adminlogin']);  
    }
    if(this.Name=='Student' && this.Password=='Student@123'){
      console.log("itss STudent");
       this.Name='';
      this.Password='';
      this.router.navigate(['/studentpage']);  
    }
    if(this.Name=='Teacher' && this.Password=='Teacher@123'){
      console.log("itss Teacher");
       this.Name='';
      this.Password='';
      this.router.navigate(['/teacherpage']);  
    }
  }
}