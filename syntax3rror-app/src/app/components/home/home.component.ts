import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  key: string;

  dataToChildComponent: string = 'syntax3rror';

  constructor( private activatedRoute: ActivatedRoute ) {
   }

  ngOnInit() {
    this.key = this.activatedRoute.snapshot.params['key'];
  }
}
