import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from '../service/appdata.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogin : boolean = false;
  user = new user();
  constructor(private data : AppdataService, private router : Router){
    this.isLogin = this.data.isLogin;
    this.user = data.user;
  }

  goGoods(){
    this.router.navigateByUrl("/customer/goods");
  }

  goOrder(){
    this.router.navigateByUrl("/customer/order");
  }
}

class user{
  username :any;
  id :any;
  pass : any;
  cast : any;

}
