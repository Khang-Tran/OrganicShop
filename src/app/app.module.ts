import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// import Firebase Module
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'

// import Bootstrap components
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';

// import Form components
import { CustomFormsModule } from 'ng2-validation'
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './admin/product-form/product-form.component';

// import app components
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { LoginComponent } from './login/login.component'
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';

// import router module
import { RouterModule } from '@angular/router'

// import ng-bootstrap components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// import Services
import { UserService } from './services/user-services/user.service';
import { CategoryService } from './services/goods-services/category.service';
import { ProductService } from './services/goods-services/product.service';

// import Auth Services
import { AuthService } from './services/auth-services/auth.service';
import { AuthGuardService } from './services/auth-services/auth-guard.service';
import { AdminAuthGuardService } from './services/auth-services/admin-auth-guard.service';
import { ShoppingCartService } from './shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,

    // Boostrap components
    BsNavbarComponent,

    // App components
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    // Firebase modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    // Router configurations
    RouterModule.forRoot([
      // Anonymous paths
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },

      // Paths required logged in
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'my/orders', component: MyOrderComponent, canActivate: [AuthGuardService] },

      // Paths for admins
      // Product paths
      {
        path: 'admin/products/new', component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'admin/products/:id', component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'admin/products', component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },

      // Order paths
      {
        path: 'admin/orders', component: AdminOrdersComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      }
    ]),

    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
