import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Forest',
      url:
        'https://media.istockphoto.com/photos/idyllic-forest-at-sunrise-picture-id1066602804',
    },
    {
      title: 'At the City',
      url:
        'https://newevolutiondesigns.com/images/freebies/city-wallpaper-37.jpg',
    },
    {
      title: 'At the Snow',
      url:
        'https://newevolutiondesigns.com/images/freebies/city-wallpaper-37.jpg',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Forest',
      url:
        'https://media.istockphoto.com/photos/idyllic-forest-at-sunrise-picture-id1066602804',
    },
    {
      title: 'At the City',
      url:
        'https://newevolutiondesigns.com/images/freebies/city-wallpaper-37.jpg',
    },
    {
      title: 'At the Snow',
      url:
        'https://newevolutiondesigns.com/images/freebies/city-wallpaper-37.jpg',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At the Forest',
      url:
        'https://media.istockphoto.com/photos/idyllic-forest-at-sunrise-picture-id1066602804',
    },
    {
      title: 'At the City',
      url:
        'https://newevolutiondesigns.com/images/freebies/city-wallpaper-37.jpg',
    },
    {
      title: 'At the Snow',
      url:
        'https://newevolutiondesigns.com/images/freebies/city-wallpaper-37.jpg',
    },
  ];

  constructor() {}

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  ngOnInit(): void {}
}
