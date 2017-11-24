import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  SiteTitle = 'Syntax3rror';

  public isCollapsed = true;

  people: Person[] = [
    { name: 'Housame', url: 'https://www.linkedin.com/in/housame-oueslati-b1249874' },
    { name: 'Jimmy', url: 'https://se.linkedin.com/in/jimmy-waern-55916841' },
    { name: 'Mauricio', url: 'https://se.linkedin.com/in/mauricio-ludwig-987ba9135' },
    { name: 'Tommy', url: 'https://en.wikipedia.org/wiki/Fibonacci' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
