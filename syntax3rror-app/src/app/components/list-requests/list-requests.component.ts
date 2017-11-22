import { Component, OnInit } from '@angular/core';
import { ExpDatabaseService } from '../../services/exp-database.service';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent implements OnInit {

  requests: any;

  constructor( private expDbService: ExpDatabaseService ) { }

  ngOnInit() {
    this.requests = this.expDbService.getRequestsIncludingKey();
  }
  deleteRequest(key: string){
    this.expDbService.deleteRequest(key);
  }
}
