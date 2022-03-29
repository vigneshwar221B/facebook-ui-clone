import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gaming-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts = [
    {
      name: 'name1',
      game: 'game1',
      date: 'Feb 1',
      vidUrl: 'https://www.youtube.com/embed/p4QG59y6FGE',
    },
    {
      name: 'name2',
      game: 'game2',
      date: 'Feb 2',
      vidUrl: 'https://www.youtube.com/embed/-dCIPjxH3wU',
    },
    {
      name: 'name3',
      game: 'game3',
      date: 'Feb 3',
      vidUrl: 'https://www.youtube.com/embed/uIt298IgFhk',
    },
  ];

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
}
