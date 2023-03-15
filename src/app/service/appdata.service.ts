import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {
  isLogin : boolean = false;
  cartList = new Array<foods>();
  constructor() { }
  isFirstCart : boolean = true;
  user = new user();
  orders = new Array<order>();
}

class foods{
  id : any;
  name : any;
  price : any;
  detail : any;
  url : any;
  type : any;
  amount:any;
  constructor(){

  }
}

class user{
  cid :any;
  username :any;
  id :any;
  pass : any;
  cast : any;
}

class order{
  id : any;
  username : any;
  odate : any;
  fdata : any;
  status : any;
  allPrice : any;
}
