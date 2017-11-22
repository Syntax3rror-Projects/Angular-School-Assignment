import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpDatabaseService } from '../../services/exp-database.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  requestForm = new FormGroup({
    name: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    dateFrom: new FormControl('', Validators.required),
    dateTo: new FormControl('', Validators.required),
  });

  constructor( private expDbService: ExpDatabaseService ) { }

  saveRequest(){
    this.expDbService.saveRequest(this.requestForm.value);
  }

  ngOnInit() {
    this.requestForm.reset({
      name: 'PuppetMaster',
      company: 'syntax3rror',
      email: 'syntax3rrorsolutions@outlook.com',
      title: 'BoxCore',
      description: 'BoxPeak-dräparen.',
      dateFrom: {year: 2017, month: 11, day: 27},
      dateTo: {year: 2017, month: 12, day: 3 }
    });
  }

}
