import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from 'src/app/service/appdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: any;
  constructor(private router : Router , private data : AppdataService){

  }
  goGoodsPage(username : string , password : string ){
    this.user = new user();
    if(username === this.user.id && password === this.user.pass){
      console.log("ok");
      this.data.user = this.user;
      this.router.navigateByUrl("/customer/goods");
      this.data.isLogin = false;
    }else{
      console.log("wrong");
    }
  }

}

class user{
  username : string = "fim";
  id :string ="ddza1992";
  pass : string = "1234";
  cast : number = 100;

}
