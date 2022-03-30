import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friends } from '../interfaces/friends';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  firebaseURL:string ='https://facebook-clone-ui-d3878-default-rtdb.firebaseio.com/friendsRequest.json';

  friendRequest:Friends[] =[];//this.fetchUsers();
  suggested:Friends[]=[];

  constructor(private http: HttpClient) { }

  fetchFriendRequest(){
    this.http.get(this.firebaseURL).subscribe(
      res => this.friendRequest = Object.values(res)[0],
      err => console.log(err)
    );
  }
  fetchFriendSuggestions(){
    this.http.get(this.firebaseURL).subscribe(
      res => this.suggested = Object.values(res)[1],
      err => console.log(err)
    );
  }


}
