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
  dataRefresher: any;
  constructor(private PostcardService:PostcardService) { }

  ngOnInit(): void {
    console.log("In post card ngOnInit..");
    this.fetchData();
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




}


