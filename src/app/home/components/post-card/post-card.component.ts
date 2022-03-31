import { PostcardService } from './../../../services/postcard.service';
import { Component, OnInit } from '@angular/core';
import { postcard } from 'src/app/interfaces/Postcard';
import { Reacted } from '../../../interfaces/Reacted';
import { Comment } from 'src/app/interfaces/Comment';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  postcardobj:postcard[]=[]
  public postcardarr:Array<postcard>=[];
  reactions:Reacted[]=[];
  comments: Comment[] = [];

  constructor(private PostcardService:PostcardService) { }
  /*
  dataRefresher: any;
  constructor(private PostcardService:PostcardService) { }

  ngOnInit(): void {
    console.log("In post card ngOnInit..");
    this.fetchData();
  */

  ngOnInit(): void {

    this.PostcardService.setData(false);
    this.PostcardService.dataMsg.subscribe((reload)=>{
      console.log("Inside subscription "+this.postcardarr.length);
      console.log(reload);
      if(reload) {
        this.fetchData();
        this.PostcardService.setData(false);
      }
    })
    /*this.PostcardService.getData().subscribe((data:any)=>{

      this.postcardobj=data;
      this.postcardarr=(Object.values(this.postcardobj));

      for (const postDetails of this.postcardarr) {
        this.reactions.push(new Reacted());
        const comment: Comment = {
          img: postDetails.comment_user_dp,
          name: postDetails.comment_user_name,
          text: postDetails.comment,
        }

        this.comments.push(comment);
      }
      this.postcardarr = this.postcardarr.reverse();

    });*/
    this.fetchData();
    console.log("In ngOnInit of post card"+this.postcardarr.length);

  }
  ngOnChanges():void{
    console.log("In post card ngOnChange..");
    this.fetchData();
  }
   fetchData(){
    this.PostcardService.getData().subscribe((data:any)=>{

      this.postcardobj=data;
      this.postcardarr=(Object.values(this.postcardobj));

      for (const postDetails of this.postcardarr) {
        this.reactions.push(new Reacted());
        const comment: Comment = {
          img: postDetails.comment_user_dp,
          name: postDetails.comment_user_name,
          text: postDetails.comment,
        }

        this.comments.push(comment);
      }
      this.comments = this.comments.reverse();
      this.postcardarr = this.postcardarr.reverse();

    });
   }

  get postcardarray():postcard[]{
    this.fetchData();
    return this.postcardarr;
  }
  reacted={
    name:"",
    type:"",
  }



  focusCommentBox(i: number) {
    const cmts = document.querySelectorAll<HTMLElement>('.cmt');
    cmts[i].focus();
  }

}


