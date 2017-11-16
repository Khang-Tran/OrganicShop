import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../model/shopping-cart';
import { Product } from '../model/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private async create() {
    let cartId = await this.getOrCreateCartId()
    return this.db.list("/shopping-cart").push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId()
    return this.db.object("/shopping-cart/" + cartId)
      .map(x => new ShoppingCart(x.items));
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
    this.updateItem(product, 1);
  }

  async removeFromCart(product) {
    this.updateItem(product, -1);
  }


  private async updateItem(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
      let quantity = (item.quantity || 0) + change;
      if (quantity === 0)
        item$.remove();
      else
        item$.update({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity: quantity
        });

    });
  }

  async clearCart() {
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-cart/' + cartId + "/items").remove();
  }
}
