import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  adressFields: string[] = ['syntax3rror', 'Adressvägen 18', '128 95 Stockholm'];
  constructor() { }

  ngOnInit() {
  }

}
