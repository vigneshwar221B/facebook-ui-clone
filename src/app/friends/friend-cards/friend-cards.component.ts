import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-cards',
  templateUrl: './friend-cards.component.html',
  styleUrls: ['./friend-cards.component.scss']
})
export class FriendCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  friendrequest=[
    {
      name : 'Deepika Sanna',
      work : 'Programmer at Meta',
      education : 'Studied at Harvard University',
      image_url : 'https://scontent.fixm4-1.fna.fbcdn.net/v/t1.6435-1/55840575_2842746345735820_43346390499196928_n.jpg?stp=dst-jpg_p240x240&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=0CfL0aS6eDIAX9ckxS3&_nc_ht=scontent.fixm4-1.fna&oh=00_AT_C-jdhRxX2-Vy5Eq8U51jIfxFQSEDm2hcZRMhFZTZqMw&oe=626612D1',
      mutual_friends : '2',
    },
  ];

  suggested=[
    {
      name : 'Chris Hughes',
      work : 'Co-Chair at Economic Security Project and Co-founder at Facebook App',
      education : ' Studied History and Literature at Harvard University',
      image_url : 'https://www.bing.com/th?id=ODL.951e2f97e0941d6699cd2400dd6ebcf5&w=100&h=100&c=12&pcl=faf9f7&o=6&dpr=1.5&pid=13.1',
      mutual_friends : '2',
    },
    {
      name : 'Kevin Systrom ',
      work : 'Programmer & Entrepreneur and founder of Instagram',
      location : 'loc:From Holliston, Massachusetts',
      image_url : 'https://www.bing.com/th?id=AMMS_6401f02989627919a8d6c6b4f20e1d9b&w=120&h=160&c=12&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&rf=Placeholder-Person_60x60.png&pid=16.2',
      mutual_friends : '6',
    },
    {
      name : 'Eduardo Saverin',
      work : 'Co-founder at Facebook App',
      education : 'Studied Economics at Harvard University',
      image_url : 'https://www.bing.com/th?id=AMMS_644e8c8d0b1fbcefc56c6b860a4d24e7&w=120&h=160&c=12&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&rf=Placeholder-Person_60x60.png&pid=16.2',
      mutual_friends : '3',
    },
    {
      name : 'Bob Cagnazzi',
      work : 'CEO at Presidio',
      education : 'NYU Stern School of Business',
      image_url : 'https://media-exp1.licdn.com/dms/image/C4D03AQEjoEO4vmHDIA/profile-displayphoto-shrink_400_400/0/1568044697083?e=2147483647&v=beta&t=08U3qplXHnzgBZ6nWIE-j7SfrEOdqmktyaJKaEGxc78',
      mutual_friends : '2',
    },
    {
      name : 'Shreyl SandBerg',
      work : 'Chief operating officer at Meta',
      education : 'Studied at Harvard University',
      image_url : 'https://www.bing.com/th?id=AMMS_f7740bdadb46896a29fc14fb61f57189&w=120&h=160&c=12&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&rf=Placeholder-Person_60x60.png&pid=16.2',
      mutual_friends : '5',
    },
    {
      name : 'Pete Kocks',
      work : 'works at Salesforce',
      education : 'Studied Economics at Harvard University',
      image_url : 'https://scontent.fixm4-1.fna.fbcdn.net/v/t31.18172-8/16587288_10155363153711874_5118206368471650475_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-qcA43j7emgAX8CdQmq&_nc_ht=scontent.fixm4-1.fna&oh=00_AT-gnBjCtnLymNXv2LwJ-teERyG4posO_IKKVKMolq5aqw&oe=62663616',
      mutual_friends : '1',
    },
  ];
  removeItem(friend:string){
    this.friendrequest.forEach((value,index)=>{
      console.log("In parent : "+value.name);
      if(value.name===friend)     this.friendrequest.splice(index,1);
  });
  }
  removeSuggest(friend:string){
    this.suggested.forEach((value,index)=>{
      console.log("In parent : "+value.name);
      if(value.name===friend)     this.suggested.splice(index,1);
  });
  }
}
