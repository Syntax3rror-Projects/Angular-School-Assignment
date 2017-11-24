import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cssClass: string;
  imageUrl: string;

  constructor() { }

  ngOnInit() {
    this.imageUrl = 'https://www.mathsisfun.com/numbers/images/fibonacci.jpg';
    this.cssClass = 'online';
    setTimeout(() => {
      this.imageUrl = 'https://apod.nasa.gov/apod/image/mona_lisa.gif';
    }, 3000);
    setTimeout(() => {
      this.cssClass = 'offline';
    }, 3000);
  }

}
