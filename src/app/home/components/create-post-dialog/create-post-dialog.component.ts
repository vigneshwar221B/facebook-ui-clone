import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SelfPost } from 'src/app/interfaces/self-post';
import { PostcardService } from 'src/app/services/postcard.service';

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.scss']
})
export class CreatePostDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreatePostDialogComponent>,public postcardservice:PostcardService) { }
  activeStatus:boolean=false;
  ngOnInit(): void {
  }

  buttonActive(){
    console.log("hello in buttonActive!");
    this.activeStatus=true;
  }
  onNoClick() {
    this.dialogRef.close();
  }

  postData(){
    let text = (document.getElementById('textarea') as HTMLInputElement).value;
    console.log(text);
    var postDetails={} as SelfPost;
    postDetails.become_friend_1="Vijay";
    postDetails.become_friend_2="Ajith";
    postDetails.comment="";
    postDetails.comment_user_dp="";
    postDetails.comment_user_name="";
    postDetails.imgsrc="";
    postDetails.text=text;
    postDetails.last_seen="active";
    postDetails.mutual_friend_1="1";
    postDetails.mutual_friend_2="2";
    postDetails.no_of_comments="0";
    postDetails.no_of_likes="0";
    postDetails.userdp="https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg";
    postDetails.username="Mark Zuckerberg";

    let valueReturn = this.postcardservice.appendData(postDetails);
    console.log(valueReturn);
    this.onNoClick();
  }

}
