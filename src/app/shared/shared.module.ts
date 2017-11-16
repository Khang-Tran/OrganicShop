import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuardService } from 'shared/services/auth-services/auth-guard.service';
import { CategoryService } from 'shared/services/goods-services/category.service';
import { ProductService } from 'shared/services/goods-services/product.service';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthService } from './services/auth-services/auth.service';
import { OrderService } from './services/order.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user-services/user.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()   
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,

    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
