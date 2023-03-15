import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ChoiceComponent } from './page/choice/choice.component';
import {MatButtonModule} from '@angular/material/button';
import { GoodsComponent } from './page/customer/goods/goods.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './page/customer/login/login.component';
import {MatCardModule} from '@angular/material/card';
import { CartComponent } from './page/customer/cart/cart.component';
import { OrderComponent } from './page/customer/order/order.component';
import { OrderOwnerComponent } from './page/owner/order-owner/order-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChoiceComponent,
    GoodsComponent,
    LoginComponent,
    CartComponent,
    OrderComponent,
    OrderOwnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
