import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss'],
})
export class CommentsSectionComponent implements OnInit {
  @Input() reacted: any;

  constructor() {}

  ngOnInit(): void {}
  putLike(){
    console.log(this.reacted)
    if (this.reacted && this.reacted.type)
    {
      this.reacted.name="";
      this.reacted.type="";
    }
    else{
    this.reacted.type="like";
    this.reacted.name="Like";


    }

  }
}
