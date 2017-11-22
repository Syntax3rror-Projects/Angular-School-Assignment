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
    { name: 'Leonardo', skills: ['', ''] },
    { name: 'Donatello', skills: ['', ''] },
    { name: 'Rafael', skills: ['', ''] },
    { name: 'Michaelangular', skills: ['', ''] },
  ];

  names = ['a', 'b', 'c'];

  constructor() { }

  ngOnInit() {
  }

}
