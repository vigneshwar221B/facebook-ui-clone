import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  friendsList = [
    {
      name: 'Burn Abasse',
      img: 'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-1/276016457_118503230772058_8909624857440009081_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=CktQI_jvOK8AX9mpbGg&_nc_ht=scontent.fixm4-1.fna&oh=00_AT_N51QcIEWri0QDOlIyqvpEYabkFlsbY4KC2Mn5YL4r2g&oe=6244AA84',
    },
    {
      name: 'Neab Mey',
      img: 'https://scontent.fcjb5-1.fna.fbcdn.net/v/t39.30808-1/261852650_962119507735482_4876346626817587423_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=pdJ6ULJ85DEAX-vITBm&tn=32eFa5rYn8jORdjy&_nc_ht=scontent.fcjb5-1.fna&oh=00_AT95GQN1G4R8rGYBOhLi7-7byw2-XR8zgFLtQyx9B8aztA&oe=6244818C',
    },
    {
      name: 'Ogbulata Rolly B Roland',
      img: 'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/275672090_456473856271703_1034268317692278122_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qJzobY5Ljt8AX_MFnrp&_nc_ht=scontent.fixm4-1.fna&oh=00_AT8Bd4NzAZVmjz_WGJAhzgLyuSMrcp7Trjafax7emQdUeA&oe=6243DEDC',
    },
    {
      name: 'Machaba Marceloovoid',
      img: 'https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/274870148_101870132450149_2649723012914173351_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ktnYt9pqTqMAX8Fq2xZ&tn=32eFa5rYn8jORdjy&_nc_ht=scontent.fixm4-1.fna&oh=00_AT_yJweaX6vL9h0VZ-22Q5X91MyCD2dGX9oASyVmRwWgsg&oe=62443F57',
    },
    {
      name: 'Rubengod de Luque',
      img: 'https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-6/276158431_490394539221398_5486599909653118039_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=F3jh8hHKZ0oAX-UgTY_&_nc_ht=scontent.fmaa2-2.fna&oh=00_AT8-DR_Q2zUfet7P2lyBN5SQLWHk4W8rufhyGyY96DKXrA&oe=6243659B',
    },
    {
      name: 'Sangkut Susanti',
      img: 'https://scontent.fcjb5-1.fna.fbcdn.net/v/t39.30808-6/275754873_145350584634831_1262400285356080414_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DAGHFiSSjpgAX9iYrco&_nc_ht=scontent.fcjb5-1.fna&oh=00_AT8DiG3Ioh4kXd77GH42vlEewL4JAbjEbXwUqfuBJuDniQ&oe=6244AE88',
    },
    {
      name: 'Kazol Kazol',
      img: 'https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-1/271839169_613955816546521_3806877485772268202_n.jpg?stp=dst-jpg_s320x320&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=sVOzilw8NfMAX9DswTg&_nc_ht=scontent.fmaa2-2.fna&oh=00_AT-3c_4Vw6aklltUfNWayT2PbyzoY93cy3qvqkx-kPlSlg&oe=62446A60',
    },
    {
      name: 'LƯU NGUYÊN',
      img: 'https://scontent.fmaa2-3.fna.fbcdn.net/v/t39.30808-6/275993971_542090157543808_3994324319208739619_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jxJpp1qpNigAX_bAbn2&_nc_ht=scontent.fmaa2-3.fna&oh=00_AT8BOwQ6CPLZumtC6f0AVDEsTcW-0eTh8x6BtoBb15IyHQ&oe=62451DEB',
    },
    {
      name: 'Yeen Prc',
      img: 'https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-6/241347066_1225421404592859_7422399697576492531_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PDIdBgmFYewAX_o14x7&_nc_ht=scontent.fmaa2-2.fna&oh=00_AT9rbvWD3BEGqQZ-rXPI_Rf0rLLfR2H5wfkGHGdRTMPV3A&oe=6244F6C8',
    },
  ];
}
