import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from 'src/app/service/appdata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  wallet : number = 100;
  deliveryPrice : number = 20;
  isConfirm :boolean = false;
  foods = new Array<foods>();
  allPrice : number = 0;
  order : any;


  constructor(private data : AppdataService , private router : Router){
    this.foods = data.cartList;
    this.data.cartList.forEach(element =>{
      this.allPrice += element.price * element.amount;
    });
    console.log(this.foods);
  }

  remove(id : number){
    let idx : number = 0;
    let count : number = 0;
    this.allPrice =0;
    this.data.cartList.forEach(element =>{
      if(element.id == id){
        console.log("id == id");
        idx = count;
      }
      console.log(idx);
      count+=1;
    });
    console.log("index = "+idx);
    this.data.cartList.splice(idx,1);
    this.data.cartList.forEach(element =>{
      this.allPrice += element.price * element.amount;
    });
  }
  back(){
    this.router.navigateByUrl("/customer/goods");
  }

  confirm(){
    this.isConfirm = true;
  }
  close(){
    this.isConfirm = false;
  }

  addToOrder(){
    if(this.data.user.cast < this.allPrice + this.deliveryPrice){
      return console.log(this.data.user.cast + "<"+this.allPrice+" "+this.deliveryPrice);
    }else{
      this.order = new order(
        1,
        this.data.user.username,
        "20:20:20",
        "21:20:20",
        "กำลังดำเนินการ",
        this.allPrice + this.deliveryPrice
      );
      this.data.user.cast -= (this.allPrice + this.deliveryPrice);
      this.data.orders.push(this.order);
      this.router.navigateByUrl("/customer/order");
    }
  }
}

class foods{
  id : any;
  name : any;
  price : any;
  detail : any;
  url : any;
  type : any;
  amount: any;
  constructor(){

  }
}

class order{
  id : any;
  username : any;
  odate : any;
  fdate : any;
  status : any;
  allPrice : any;
  constructor(
    id : number,
    username : string,
    odate : string ,
    fdate : string,
    status : string,
    allPrice : number
  ){
    this.id = id;
    this.username = username;
    this.odate = odate;
    this.fdate = fdate;
    this.status = status;
    this.allPrice = allPrice;
  }
}

