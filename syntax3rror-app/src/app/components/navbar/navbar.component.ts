import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  SiteTitle = 'Syntax3rror Job Request';
  names: string[] = ['Athos', 'Porthos', 'Aramis', 'd\'Artagnan'];

  constructor() { }

  ngOnInit() {
  }

}
