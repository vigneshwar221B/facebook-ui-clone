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

    });

  }
  ngOnChanges():void{
    console.log("In post card ngOnChange..");
    this.fetchData();
  }
   fetchData(){
    this.PostcardService.getData().subscribe((data:any)=>{
      console.log(data);
      this.postcardobj=data;
      console.log(this.postcardobj);
      this.postcardarr=(Object.values(this.postcardobj));
      console.log(this.postcardarr);

      for (let i = 0; i < this.postcardarr.length; i++) {
        this.reactions.push(new Reacted());
      }
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


