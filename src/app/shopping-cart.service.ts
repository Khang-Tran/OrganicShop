import { Product } from './model/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take'
@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list("/shopping-cart").push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart() {
    let cartId = await this.getOrCreateCartId()
    return this.db.object("/shopping-cart/" + cartId);
  }
  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');

    if (!cartId) {
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
    }
    return cartId;
  }

  private getItem(cartId, productId) {
    return this.db.object("/shopping-cart/" + cartId + '/items/' + productId);
  }

  async addToCart(product: Product) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
      if (item.$exists()) {
        item$.update({ quantity: item.quantity + 1 });
      }
      else item$.update({ product: product, quantity: 1 });
    });
  }
}
