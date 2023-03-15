import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Record } from '../data/record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private _records: BehaviorSubject<Array<Record>>;
  private records: Array<Record>;
  public records$: Observable<Array<Record>>;

  private nextId: number;
  private _nextId: BehaviorSubject<number>;
  public nextId$: Observable<number>;

  constructor() {
    this.getRecords();
  }

  addRecord(model: Record) {
    this.records.push(model);
    this.nextId++;
    this.updateEvent();
  }

  deleteRecord(id: number) {
    this.records.forEach((t, i) => {
      if(t.id === id) {
        this.records.splice(i, 1);
      }
    });
    this.updateEvent();
  }

  getRecords(): void {
    this.setDefaultRecords();
    this._records = new BehaviorSubject(this.records);
    this.records$ = this._records.asObservable();
    // set next id for record state
    this.setInitalNextId();
  }

  setDefaultRecords() {
    this.records = Array<Record>(new Record(1,4532,1), new Record(2,4536,3));
  }

  setInitalNextId() {
    this.setNextId();
    this._nextId = new BehaviorSubject(this.nextId);
    this.nextId$ = this._nextId.asObservable();
  }

  clearRecords() {
    this.records = new Array<Record>();
    this.updateEvent();
  }

  resetRecords() {
    this.setDefaultRecords();
    // reset id based on new record
    this.setNextId();
    this.updateEvent();
  }

  updateEvent() {
    // despatch new record state
    this._records.next(this.records);
    // despatch new nextId state
    this._nextId.next(this.nextId);
  }

  // Sets initial nextId based on max id in record collection
  setNextId() {
    var maxId = Math.max(...this.records.map((r) => r.id));
    this.nextId = maxId+=1;
  }

}
