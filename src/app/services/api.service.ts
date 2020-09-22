import { Injectable } from '@angular/core';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Users: any[];
  person: any;

  constructor(public data: Details) { }

  //function to get users
  getUsers() {
    return this.data.students;
  }
  // function for gettiing a single user
  getUserinfo(ref) {
    this.Users = this.data.students;
    this.Users.forEach(i => {
      this.person = i['users'];
    });
return this.person.find(e=>e.Userid===ref);
  }
  //get single user subject
  getSubjects(ref) {
    this.Users = this.data.students;
    this.Users.forEach(i => {
      this.person = i['subject'];
    });
return this.person.find(e=>e.Userid===ref);
  }

}
