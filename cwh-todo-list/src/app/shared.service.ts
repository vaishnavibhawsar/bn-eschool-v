import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  user = [];

  constructor() {}
  setData(data: any) {
    this.user = data;
  }
  getData() {
    return this.user;
  }
}
