import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AdminModule } from 'app/admin/admin.module';
import { CoreModule } from 'app/core/core.module';
import { ShoppingModule } from 'app/shopping/shopping.module';
import { SharedModule } from 'shared/shared.module';

import { environment } from '../environments/environment';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { ProductsComponent } from './shopping/components/products/products.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    SharedModule,
    ShoppingModule,
    CoreModule,
    // Firebase modules
    AngularFireModule.initializeApp(environment.firebase),

    // Router configurations
    RouterModule.forRoot([
      // Anonymous paths
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent }
    ]),
  ],
  providers: [
    AdminAuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
