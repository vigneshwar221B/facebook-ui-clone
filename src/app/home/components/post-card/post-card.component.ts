import { PostcardService } from './../../../services/postcard.service';
import { Component, Input, OnInit } from '@angular/core';
import { postcard } from 'src/app/interfaces/Postcard';
import { Reacted } from './Reacted';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  postcardobj:postcard[]=[]
  public postcardarr:Array<postcard>=[];
  reactions:Reacted[]=[];
  constructor(private PostcardService:PostcardService) { }

  ngOnInit(): void {

  this.PostcardService.getData().subscribe((data:any)=>{
   console.log(data);
    this.postcardobj=data;
    console.log(this.postcardobj);
    this.postcardarr=(Object.values(this.postcardobj));
    console.log(this.postcardarr);

    for (let i = 0; i < this.postcardarr.length; i++) {
      this.reactions.push(new Reacted());
    }

  });
  }



  reacted={
    name:"",
    type:"",
  }




}


