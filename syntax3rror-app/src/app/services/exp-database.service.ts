import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ExpDatabaseService {

  requestsListRef: AngularFireList<any>;

  constructor(private angularFireDb: AngularFireDatabase) {
    this.requestsListRef = angularFireDb.list('requests');
  }

  public saveRequest(requestToSave) {
    this.requestsListRef.push(requestToSave);
  }

  public getRequests() {
    return this.requestsListRef.valueChanges();
  }

  public getRequestsIncludingKey() {
    return this.requestsListRef.snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  public getRequestByKey(key: string) {
    return this.angularFireDb.object('requests/' + key).valueChanges();
  }

  updateRequest(key: string, formData: Object) {
    this.angularFireDb.object('requests/' + key).set(formData);
  }

  deleteRequest(key: string) {
    this.requestsListRef.remove(key);
  }
}
