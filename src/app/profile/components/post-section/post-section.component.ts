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
      height: '75vh'
    });
  }

  photos = [
    'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/274693439_10114340420219721_7126909141974919066_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=YZ47KWDwnLIAX8gjJqY&_nc_ht=scontent.fixm4-1.fna&oh=00_AT_YeVj1hq5S-HqVhOzlDlsCgoeISPYAqVKYbMdMg9_wTA&oe=62439039',
    'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/254071830_10114054018550961_7718396528558372429_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TN-A9E8dP4cAX8XkvGk&tn=32eFa5rYn8jORdjy&_nc_ht=scontent.fixm4-1.fna&oh=00_AT9ZY2fa33Khy3wk9HSaBylaP63AW2GFN_NmPjRrExpchw&oe=62447EF2',
    'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/250190276_10114027736889621_5091613826737603263_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TDzeQ_hWrMIAX-vkqrC&tn=32eFa5rYn8jORdjy&_nc_ht=scontent.fixm4-1.fna&oh=00_AT8uEXXFSxILLPgDSjb7irh75ReW1ogHi9MN2B3057ghYA&oe=6243272E',
    'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/242243386_10113905107350201_6777621750194525047_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=qaIK9O5AB5sAX8QMlA7&tn=32eFa5rYn8jORdjy&_nc_ht=scontent.fixm4-1.fna&oh=00_AT_F-u_F5c76nk9H454A-0NPnGI4FdYkQBo87xZ0pnKnXA&oe=62432F7A',
    'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/214065777_10113596206250481_29786003767834585_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=XPmNyuVpD8MAX8PCkcu&tn=32eFa5rYn8jORdjy&_nc_ht=scontent.fixm4-1.fna&oh=00_AT-5-hjBoo5XSPDr8xyhLTTvQ2gnQXKrB96ksJRBnEPr_Q&oe=6243D59C',
    'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/216941619_10113596206195591_1657222396928057597_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=MF3uAzu7D_UAX9HAVPk&_nc_ht=scontent.fixm4-1.fna&oh=00_AT9mbPXiWnupFSzYVMLEZC2_sYQULFrnsXyLQe37vlUqww&oe=6244DEA5',
    'https://scontent.fixm4-1.fna.fbcdn.net/v/t1.6435-9/125374154_10112554952002341_5142366622539205599_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=JRe7aRQvsn8AX8XObVT&_nc_ht=scontent.fixm4-1.fna&oh=00_AT-SEj0ScnmH5FjE3C7DtOw2CDQhvEdl2EUrk6fnBhNmAQ&oe=6264AA03',
    'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/184336184_10112952645256871_3225287866432331976_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=zGOGjcz-sm8AX_8_ff4&_nc_ht=scontent.fixm4-1.fna&oh=00_AT-EYavRcqm3ivX0KXQNOz8jPkaIB0JrrQC3bWRxA7AIdw&oe=624472F1',
    'https://scontent.fixm4-1.fna.fbcdn.net/v/t1.6435-9/122914594_10112507394996961_3539330593601080776_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=38jBdBZdcTMAX_mPusA&_nc_ht=scontent.fixm4-1.fna&oh=00_AT8GBh4Fskg7Ezlv4GcWngjZogJxmoJoMQJ7Ym3Wn9HIDw&oe=62630720',
  ];

  feeds = [
    {
      timeline: {
        birthday: [
          {
            name: 'Burn Abasse',
            text: 'Happy Birthday',
            img: 'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-1/276016457_118503230772058_8909624857440009081_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=CktQI_jvOK8AX9mpbGg&_nc_ht=scontent.fixm4-1.fna&oh=00_AT_N51QcIEWri0QDOlIyqvpEYabkFlsbY4KC2Mn5YL4r2g&oe=6244AA84',
            date: '14 May 2022',
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
                img: 'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/274693439_10114340420219721_7126909141974919066_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=YZ47KWDwnLIAX8gjJqY&_nc_ht=scontent.fixm4-1.fna&oh=00_AT_YeVj1hq5S-HqVhOzlDlsCgoeISPYAqVKYbMdMg9_wTA&oe=62439039',
              },
              {
                name: 'Neab Mey',
                text: 'Happy Birthday Mark',
                img: 'https://scontent.fcjb5-1.fna.fbcdn.net/v/t39.30808-1/261852650_962119507735482_4876346626817587423_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=pdJ6ULJ85DEAX-vITBm&tn=32eFa5rYn8jORdjy&_nc_ht=scontent.fcjb5-1.fna&oh=00_AT95GQN1G4R8rGYBOhLi7-7byw2-XR8zgFLtQyx9B8aztA&oe=6244818C',
              },
            ],
          },
          {
            name: 'Ogbulata Rolly B Roland',
            text: 'Happy Birthday have a great day',
            img: 'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-1/276016457_118503230772058_8909624857440009081_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=CktQI_jvOK8AX9mpbGg&_nc_ht=scontent.fixm4-1.fna&oh=00_AT_N51QcIEWri0QDOlIyqvpEYabkFlsbY4KC2Mn5YL4r2g&oe=6244AA84',
            date: '14 May 2022',
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
