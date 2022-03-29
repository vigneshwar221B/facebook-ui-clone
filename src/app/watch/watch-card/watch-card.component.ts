import { WatchService } from './../../services/watch.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Watch } from 'src/app/interfaces/Watch';


@Component({
  selector: 'app-watch-card',
  templateUrl: './watch-card.component.html',
  styleUrls: ['./watch-card.component.scss']
})
export class WatchCardComponent implements OnInit {

  watch:Watch[]=[];
 
  public watchdarr=[];
  str:string="";
 public d:Array<any>=[];
 dict={};
  constructor(private _sanitizer: DomSanitizer,private WatchService:WatchService) {


  }

  ngOnInit(): void {

  // this.url=this.watchdata[0].video_link
  this.WatchService.getData().subscribe((data:any)=>{console.log(data);
  this.watch=data;
  this.d=(Object.values(this.watch));
  

  this.str=JSON.stringify(this.d);
  var obj = this.str;
  var stringify = JSON.parse(obj);
  var watcharr=[];
  for (var i = 0; i < stringify.length; i++) {
    
    //  dict=(stringify[i][0])
    //  console.log(dict);
    this.dict={
      'username':stringify[i]['username'],'user_dp':stringify[i]['user_dp'],
       'video':this._sanitizer.bypassSecurityTrustResourceUrl(stringify[i]['video']),
       'posted_date':stringify[i]['posted_date'],'no_of_like':stringify[i]['no_of_like'],
       'no_of_comments':stringify[i]['no_of_comments'],'no_of_views':stringify[i]['no_of_views']
       
    };
      // this.ans.push(stringify[i]['name']);
      // this.ans.push(stringify[i]['completed']);

     
      watcharr.push(this.dict);
      
      console.log(watcharr);
 
  
  }
  this.d=watcharr;
  });
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
