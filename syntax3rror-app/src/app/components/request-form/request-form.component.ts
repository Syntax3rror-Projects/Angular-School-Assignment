import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpDatabaseService } from '../../services/exp-database.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  @Input() key: string;
  @Input() childProp: string;

  requestForm = new FormGroup({
    name: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    dateFrom: new FormControl('', Validators.required),
    dateTo: new FormControl('', Validators.required),
  });

  constructor(private expDbService: ExpDatabaseService) { }

  updateRequest() {
    this.expDbService.updateRequest(this.key, this.requestForm.value);
  }

  saveRequest() {
    this.expDbService.saveRequest(this.requestForm.value);
  }

  ngOnInit() {

    if (typeof this.key !== 'undefined') {

      this.expDbService.getRequestByKey(this.key).subscribe(request => {
        this.requestForm.reset({
          name: request['name'],
          company: request['company'],
          email: request['email'],
          title: request['title'],
          description: request['description'],
          dateFrom: request['dateFrom'],
          dateTo: request['dateTo']
        });
      });
    }
  }

}
