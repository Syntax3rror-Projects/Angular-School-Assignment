import { Component, OnInit } from '@angular/core';
import {Person} from '../../models/person';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  SiteTitle = 'Syntax3rror';

  public isCollapsed = true;

  people: Person[] = [
    { name: 'a', skills: ['', ''] },
    { name: 'b', skills: ['', ''] },
    { name: 'c', skills: ['', ''] },
    { name: 'd', skills: ['', ''] },
    { name: 'Jesus', skills: ['', ''] },
  ];

  names = ['a', 'b', 'c'];

  constructor() { }

  ngOnInit() {
  }

}
