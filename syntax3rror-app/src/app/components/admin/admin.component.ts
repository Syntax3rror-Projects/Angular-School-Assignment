import { Component, OnInit } from '@angular/core';
import { ExpDatabaseService } from '../../services/exp-database.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  requests: Observable<any[]>;

  constructor(private expDbService: ExpDatabaseService) { }

  ngOnInit() {
    this.requests = this.expDbService.getRequests();
  }

}
