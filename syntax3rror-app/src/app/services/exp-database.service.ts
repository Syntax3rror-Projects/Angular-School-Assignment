import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ExpDatabaseService {

  requestsListRef: AngularFireList<any>;

  constructor( private angularFireDb: AngularFireDatabase ) { 
    this.requestsListRef = angularFireDb.list('requests');
  }

  public saveRequest(requestToSave){
    // alert('ExpDatabaseService says: ' + requestToSave.company);
    this.requestsListRef.push(requestToSave);
  }
  public getRequests(){
    // alert('ExpDatabaseService says: ' + requestToSave.company);
    return this.requestsListRef.valueChanges();
  }
}
