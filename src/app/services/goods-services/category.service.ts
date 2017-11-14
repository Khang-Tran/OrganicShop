import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }
  // return the list of categories and sort its by name
  getAll() {
    return this.db.list("categories", {
      query: {
        orderByChild: 'name'
      }
    });
  }
}
