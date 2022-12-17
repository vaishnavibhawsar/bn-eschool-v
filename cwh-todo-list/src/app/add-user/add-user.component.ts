import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(private share: SharedService) {}
  user: Array<Array<String>> = [];
  fname: any;
  lname: any;
  mail: any;
  p1: any;
  p2: any;
  ch: any;
  registerform = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    pass: new FormControl('', [Validators.required]),
    phno: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(12),
      Validators.pattern('[0-9]*'),
    ]),
    category: new FormControl('', [Validators.required]),
  });

  Submit() {
    debugger;
    console.log('inside submit');
    console.log(this.registerform.value.firstname);
    this.fname = this.registerform.value.firstname;
    this.lname = this.registerform.value.lastname;
    this.mail = this.registerform.value.email;
    this.p1 = this.registerform.value.pass;
    this.p2 = this.registerform.value.phno;
    this.ch = this.registerform.value.category;
    this.user.push([
      this.fname,
      this.lname,
      this.mail,
      this.p1,
      this.p2,
      this.ch,
    ]);
  }

  get firstname(): FormControl {
    return this.registerform.get('firstname') as FormControl;
  }
  get lastname(): FormControl {
    return this.registerform.get('lastname') as FormControl;
  }
  get email(): FormControl {
    return this.registerform.get('email') as FormControl;
  }
  get pass(): FormControl {
    return this.registerform.get('pass') as FormControl;
  }
  get phno(): FormControl {
    return this.registerform.get('phno') as FormControl;
  }
  get category(): FormControl {
    return this.registerform.get('category') as FormControl;
  }
  ngOnInit(): void {
    this.share.setData(this.user);
  }
}
