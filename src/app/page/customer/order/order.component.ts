import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from 'src/app/service/appdata.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  orders : any;
  constructor(private router : Router , private data : AppdataService){
    this.orders = data.orders;
  }
}

class order{
  id : any;
  username : any;
  odate : any;
  fdata : any;
  status : any;
  allPrice : any;
}
