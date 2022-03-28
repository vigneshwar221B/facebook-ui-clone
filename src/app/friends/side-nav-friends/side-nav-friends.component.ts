import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-friends',
  templateUrl: './side-nav-friends.component.html',
  styleUrls: ['./side-nav-friends.component.scss']
})
export class SideNavFriendsComponent implements OnInit {

  @Input() data:string="";
  constructor() { }

  ngOnInit(): void {
  }
  friendSideNav=[
    {
      item: 'Home',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/qtKPMKHkVql.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
      background_position:'0px -482px',//'0px -630px',
      background_size: '26px 1106px',//'26px 1400px',
      arrow_icon:false,
    },
    {
      item: 'Friend requests',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/BOAdEL6ATjb.png',
      background_position:'0px -96px',
      background_size: '26px 338px',
      arrow_icon:true,
    },
    {
      item: 'Suggestions',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png',
      background_position:'0px -608px',
      background_size: '26px 1400px',
      arrow_icon:true,
    },
    {
      item: 'All Friends',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/BOAdEL6ATjb.png',
      background_position:'0px -74px',
      background_size: '26px 338px',
      arrow_icon:true,
    },
    {
      item: 'Birthdays',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/BOAdEL6ATjb.png',
      background_position:'0px -118px',
      background_size: '26px 338px',
      arrow_icon:false,
    },
    {
      item:'Custom lists',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/BOAdEL6ATjb.png',
      background_position:'0px -74px',
      background_size: '26px 338px',
      arrow_icon:true,
    }
  ]
  //watch side navbar
  watchSideNav=[];

}
