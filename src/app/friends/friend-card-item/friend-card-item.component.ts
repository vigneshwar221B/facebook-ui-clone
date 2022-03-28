import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-friend-card-item',
  templateUrl: './friend-card-item.component.html',
  styleUrls: ['./friend-card-item.component.scss']
})
export class FriendCardItemComponent implements OnInit {

  @Input() friendrequest:any;
  @Input() button1:any;
  @Input() button2:any;
  @Output() ItemEvent= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  removeElement(friendrequest:string){
    console.log(friendrequest);
     this.ItemEvent.emit(friendrequest);
  }
}
