import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from './page/choice/choice.component';
import { CartComponent } from './page/customer/cart/cart.component';
import { GoodsComponent } from './page/customer/goods/goods.component';
import { LoginComponent } from './page/customer/login/login.component';
import { OrderComponent } from './page/customer/order/order.component';
import { OrderOwnerComponent } from './page/owner/order-owner/order-owner.component';
const routes: Routes = [
  { path : '' , component : ChoiceComponent},
  { path : 'customer/login' , component : LoginComponent},
  { path : 'customer/goods' , component : GoodsComponent},
  { path : 'customer/cart' , component : CartComponent},
  { path : 'customer/order' , component : OrderComponent},
  { path : 'owner/order' , component : OrderOwnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
