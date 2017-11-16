import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase) { }

  getOrders() {
    return this.db.list('/orders');
  }

  getOrdersByUser(userId) {
    return this.db.list('/orders', {
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    });
  }

  getOrderById(orderId) {
    return this.db.object('/orders/' + orderId);
  }
  storeOrder(order) {
    return this.db.list("/orders").push(order);
  }
}
