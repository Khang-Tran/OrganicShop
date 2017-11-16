import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerSummaryComponent } from 'app/shopping/components/customer-summary/customer-summary.component';
import { OrderSuccessComponent } from 'app/shopping/components/order-success/order-success.component';
import { AuthGuardService } from 'shared/services/auth-services/auth-guard.service';

import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },

      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'my/orders', component: MyOrderComponent, canActivate: [AuthGuardService] },
      { path: 'order/details/:id', component: OrderDetailComponent, canActivate: [AuthGuardService] },
    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OrderDetailComponent,
    CustomerSummaryComponent,
  ]
})
export class ShoppingModule { }
