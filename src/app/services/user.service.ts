import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = 'https://facebook-clone-presidio-default-rtdb.firebaseio.com/users.json';

  users: User[] = [];

  constructor(private http: HttpClient) { }

  fetchUsers() {
    this.http.get(this.baseURL).subscribe(
      res => this.users = Object.values(res)[0],
      err => console.log(err)
      
    );
  }

}
