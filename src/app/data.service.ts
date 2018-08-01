import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {
  private items = new BehaviorSubject<any>([]);
  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();
  item = this.items.asObservable();
  //deleted = this.deleted.asObservable();
  constructor() { }

  changeItem(item){
    this.items.next(item)
  }
  changeGoal(goal) {
    this.goals.next(goal)
  }
 /* changeDeleted(deleted){
    this.deleted.next(deleted)
  }
  */
}

