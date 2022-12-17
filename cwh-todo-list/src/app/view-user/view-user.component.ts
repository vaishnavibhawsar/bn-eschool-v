import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import data from './user.json';

type details = Array<{
  firstn: string;
  lastn: string;
  email: string;
  pas: string;
  phonn: string;
  prof: string;
}>;
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
  detail!: details;
  userdata = data;
  user = [];
  constructor(private share: SharedService) {
    //console.log('data table' + JSON.stringify(JSON.parse(data)));
    //console.log('data table' + this.userdata);
    //debugger;
  }
  ngOnInit(): void {
    this.user = this.share.getData();
  }
}
