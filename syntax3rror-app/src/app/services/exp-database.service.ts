import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ExpDatabaseService {

  requestsListRef: AngularFireList<any>;

  constructor(private angularFireDb: AngularFireDatabase) {
    this.requestsListRef = angularFireDb.list('requests');
  }

  public saveRequest(requestToSave) {
    // alert('ExpDatabaseService says: ' + requestToSave.company);
    this.requestsListRef.push(requestToSave);
  }

  public getRequests() {
    // alert('ExpDatabaseService says: ' + requestToSave.company);
    return this.requestsListRef.valueChanges();
  }

  public getRequestsIncludingKey() {
    // use snapshotChanges().map to store the key
    return this.requestsListRef.snapshotChanges().map(changes => {
      // attach the key to our request-object (using ... (=javascript spread))
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
    // const promise = this.angularFireDb.object('requests/' + key).set(formData);
    // promise.then(_ => alert('success')).catch(err => alert(err));
  }

  deleteRequest(key: string) {
    this.requestsListRef.remove(key);
  }
}
