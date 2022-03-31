import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostDialogComponent } from 'src/app/home/components/create-post-dialog/create-post-dialog.component';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.scss'],
})
export class PostSectionComponent implements OnInit {
  @Input() friendsList: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(CreatePostDialogComponent, {
      width: '500px',
      height: '75vh',
    });
  }

  profileBio = 'Bringing the world closer together.';
  profileBioEdited = '';
  canEditBio = false;

  editBio() {
    this.canEditBio = true;
    this.profileBioEdited = this.profileBio;
  }

  cancelBio() {
    this.canEditBio = false;
    this.profileBioEdited = '';
  }

  saveBio() {
    this.profileBio = this.profileBioEdited;
    this.canEditBio = false;
  }

  photos = [
    'https://randomuser.me/api/portraits/men/4.jpg',
    'https://randomuser.me/api/portraits/men/88.jpg',
    'https://randomuser.me/api/portraits/men/66.jpg',
    'https://randomuser.me/api/portraits/men/62.jpg',
    'https://randomuser.me/api/portraits/men/90.jpg',
    'https://randomuser.me/api/portraits/men/49.jpg',
    'https://randomuser.me/api/portraits/men/24.jpg',
    'https://randomuser.me/api/portraits/men/55.jpg',
    'https://randomuser.me/api/portraits/men/82.jpg',
  ];

  feeds = [
    {
      timeline: {
        birthday: [
          {
            name: 'Burn Abasse',
            text: 'Happy Birthday',
            img: 'https://randomuser.me/api/portraits/men/23.jpg',
            date: '14 May 2021',
            to: 'Mark Zuckerberg',
            reactions: [
              {
                name: 'You',
                type: 'love',
              },
              {
                name: 'Neab Mey',
                type: 'like',
              },
            ],
            reacted: {
              name: 'Love',
              type: 'love',
            },
            comments: [
              {
                name: 'Mark Zukerberg',
                text: 'Thank you',
                img: 'https://scontent.fixm4-1.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4D9hZwxZFZIAX_20O80&_nc_ht=scontent.fixm4-1.fna&oh=00_AT-3pqM0XXzbq9mJim_5vt15Zf26K6fX1oBWW8mZjMLO3Q&oe=62648D56',
              },
              {
                name: 'Neab Mey',
                text: 'Happy Birthday Mark',
                img: 'https://randomuser.me/api/portraits/men/27.jpg',
              },
            ],
          },
          {
            name: 'Ogbulata Rolly B Roland',
            text: 'Happy Birthday have a great day',
            img: 'https://randomuser.me/api/portraits/men/22.jpg',
            date: '14 May 2021',
            to: 'Mark Zuckerberg',
            reactions: [
              {
                name: 'You',
                type: 'like',
              },
            ],
            reacted: {
              name: 'Like',
              type: 'like',
            },
            comments: [],
          },
        ],
      },
    },
  ];
}
