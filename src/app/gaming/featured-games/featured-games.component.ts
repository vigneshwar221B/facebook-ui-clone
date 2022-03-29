import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-games',
  templateUrl: './featured-games.component.html',
  styleUrls: ['./featured-games.component.scss'],
})
export class FeaturedGamesComponent implements OnInit {
  games = [
    {
      name: 'Quiz Planet',
      img: 'https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
      genre: 'Quiz and Trivia',
    },
    {
      name: 'Quiz Planet',
      img: 'https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
      genre: 'Quiz and Trivia',
    },
    {
      name: 'Quiz Planet',
      img: 'https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
      genre: 'Quiz and Trivia',
    },
    {
      name: 'Quiz Planet',
      img: 'https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
      genre: 'Quiz and Trivia',
    },
    {
      name: 'Quiz Planet',
      img: 'https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
      genre: 'Quiz and Trivia',
    },
    {
      name: 'Quiz Planet',
      img: 'https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
      genre: 'Quiz and Trivia',
    },
    {
      name: 'Quiz Planet',
      img: 'https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
      genre: 'Quiz and Trivia',
    },
    {
      name: 'Quiz Planet',
      img: 'https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
      genre: 'Quiz and Trivia',
    },
    {
      name: 'Quiz Planet',
      img: 'https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
      genre: 'Quiz and Trivia',
    },
    {
      name: 'Quiz Planet',
      img: 'https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
      genre: 'Quiz and Trivia',
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
