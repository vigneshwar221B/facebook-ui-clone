import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  friends: User[] = [
    {
      name: 'Fname Lname',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/wided-sghaier.jpg.img.490.medium.jpg/1594912196352.jpg',
      active: true
    },
    {
      name: 'Another Name',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg',
      active: true
    },
    {
      name: 'Another Name',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/miriam-faghihi.jpg.img.490.medium.jpg/1595876429967.jpg',
      active: true
    },
    {
      name: 'Fname Lname',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/wided-sghaier.jpg.img.490.medium.jpg/1594912196352.jpg',
      active: false
    },
    {
      name: 'Another Name',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg',
      active: true
    },
    {
      name: 'Fname Lname',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/wided-sghaier.jpg.img.490.medium.jpg/1594912196352.jpg',
      active: true
    },
    {
      name: 'Another Name',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg',
      active: true
    },
    {
      name: 'Fname Lname',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/wided-sghaier.jpg.img.490.medium.jpg/1594912196352.jpg',
      active: true
    },
    {
      name: 'Another Name',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg',
      active: true
    },
    {
      name: 'Fname Lname',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/wided-sghaier.jpg.img.490.medium.jpg/1594912196352.jpg',
      active: true
    },
    {
      name: 'Another Name',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg',
      active: true
    },
    {
      name: 'Fname Lname',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/wided-sghaier.jpg.img.490.medium.jpg/1594912196352.jpg',
      active: true
    },
    {
      name: 'Another Name',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg',
      active: true
    },
    {
      name: 'Fname Lname',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/wided-sghaier.jpg.img.490.medium.jpg/1594912196352.jpg',
      active: true
    },
    {
      name: 'Another Name',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg',
      active: true
    },
    {
      name: 'Fname Lname',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/wided-sghaier.jpg.img.490.medium.jpg/1594912196352.jpg',
      active: true
    },
    {
      name: 'Another Name',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg',
      active: true
    },
    {
      name: 'Fname Lname',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/wided-sghaier.jpg.img.490.medium.jpg/1594912196352.jpg',
      active: true
    },
    {
      name: 'Another Name',
      profileImg: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg',
      active: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  get activeFriends(): User[] {
    return this.friends.filter(e => e.active);
  }

}
