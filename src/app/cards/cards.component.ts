import { Component } from '@angular/core';

@Component({ selector: 'card', templateUrl: './cards.component.html' })
// @Component({
//   selector: 'bwm-header',
//   templateUrl: './header.component.html',
// })
export class CardsComponent {
  posts = [
    {
      title: 'huge tree',
      imageUrl: 'assets/tree.JPG',
      username: 'nature',
      content: 'there is a nice tree here',
    },
    {
      title: 'Mountain',
      imageUrl: 'assets/snow.jpg',
      username: 'mountain',
      content: 'mountain view',
    },
    {
      title: 'biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking',
      content: 'nice day for a biking',
    },
  ];
}
