import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-watch-card',
  templateUrl: './watch-card.component.html',
  styleUrls: ['./watch-card.component.scss']
})
export class WatchCardComponent implements OnInit {

  constructor(private _sanitizer: DomSanitizer) {


  }

  ngOnInit(): void {

  // this.url=this.watchdata[0].video_link

  }

  watchdata=[
  {
    username:"obama",
    user_dp:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg",
    video:this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Cn-o7RzUPpU?"),
    posted_date:"march 23 at 23:45",
    no_of_like:"53k",
    no_of_comments:"24k",
    no_of_views:"24M"
  },
  {
    username:"bin laden",
    user_dp:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg",
    video:this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/6C0DOb1AJ5k"),
    posted_date:"2 years ago",
    no_of_like:"123k",
    no_of_comments:"245k",
    no_of_views:"48M"
  },
  {
    username:"bin laden",
    user_dp:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg",
    video:this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/8FAUEv_E_xQ"),
    posted_date:"3  years ago",
    no_of_like:"123k",
    no_of_comments:"245k",
    no_of_views:"48M"
  }

  ];

}
