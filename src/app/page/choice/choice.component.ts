import { Component } from '@angular/core';
import { AppdataService } from 'src/app/service/appdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent {
  isLogin : boolean = false;
  constructor(private data : AppdataService , private router : Router){

  }
  goLogin(){
    this.isLogin = true;
    this.data.isLogin = this.isLogin;
    this.router.navigateByUrl('/customer/login');
  }
}
