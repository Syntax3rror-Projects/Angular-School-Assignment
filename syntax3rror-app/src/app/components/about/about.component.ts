import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cssClass: string;

  constructor() { }

  ngOnInit() {
    this.cssClass = 'online';
    setTimeout(() => {
      this.cssClass = 'offline';
    }, 3000);
  }

}
