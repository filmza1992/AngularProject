import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from 'src/app/service/appdata.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent {
  foods = new Array<any>();
  food1 = new foods(
    1,
    "ไก่ทอดธรรมดา 4 ชิ้น ",
    1,
    "1",
    "../../../../assets/images/background_chicken.jfif",
    1
  );
  food2 = new foods(
    2,
    "ไก่ทอดสไปซี้เด็ด",
    2,
    "2",
    "../../../../assets/images/WingSab.jfif",
    1
  );
  food3 = new foods(
    3,
    "FriedChicken",
    3,
    "",
    "../../../../assets/images/FriedChicken.jfif",
    1
  );

  food4 = new foods(
    4,
    "ไก่ทอดเด็ดดวงน้ำปลา",
    4,
    "",
    "../../../../assets/images/Berker.jpg",
    1
  );

  food5 = new foods(
    5,
    "ไอติม",
    5,
    "5",
    "../../../../assets/images/iceCream1.jfif",
    2
  );
  food6 = new foods(
    6,
    "โค้ก",
    6,
    "6",
    "../../../../assets/images/cokeBig1.jfif",
    3
  );

  food7 = new foods(
    7,
    "โค้กป๋อง",
    7,
    "7",
    "../../../../assets/images/cokeSmall1.jfif",
    3
  );

  food8 = new foods(
    8,
    "ข้าวไก่ทอด",
    8,
    "8",
    "../../../../assets/images/riceChicken.jpg",
    4
  );
  amount : number = 0;
  allPrice : number = 0;
  foodExam = new foods(0,"",0,"","",0);
  foodByClickList = new Array<foods>();
  foodByClick : any;
  cardAmount = 0;
  isFirstCart :boolean = true;
  isFound : any;
  typeList = new Set<number>;
  foodsByType = new Array<foods>();

  constructor(private router : Router,private data : AppdataService){
    this.foods.push(this.food1);
    this.foods.push(this.food2);
    this.foods.push(this.food3);
    this.foods.push(this.food4);
    this.foods.push(this.food5);
    this.foods.push(this.food6);
    this.foods.push(this.food7);
    this.foods.push(this.food8);
    this.foodByClickList.push(this.foodExam);
    this.foodByClick = this.foodExam;

    this.cardAmount = data.cartList.length;

    this.foods.forEach(element =>{
      this.typeList.add(element.type);
    });

    this.foodsByType = this.foods;

  }
  selectType(type : number){
    this.foodsByType = this.foods.filter(food =>(food.type == type));
    console.log(this.foodsByType);
  }
  selectAll(){
    this.foodsByType = this.foods;
  }
  clickCard(id : number){
    this.foodByClickList = this.foods.filter(food => food.id == id);
    this.foodByClick = new foods(0,"",0,"","",0);
    this.foodByClick = this.foodByClickList[0];
    this.allPrice = this.amount * this.foodByClick.price;
  }
  plus(){
    this.amount+=1;
    this.allPrice = this.amount * this.foodByClick.price;
  }
  minus(){
    if(this.amount >0){
      this.amount-=1;
      this.allPrice =  this.amount * this.foodByClick.price;
    }
  }

  addToCard(){
    if(this.foodByClick == this.foodExam || this.amount == 0){
      return console.log("first condition");
    }

    this.isFound = this.data.cartList.filter(food => food.id == this.foodByClick.id);
    if(this.isFound.length == 0){
      this.foodByClick.amount = this.amount;
      this.data.cartList.push(this.foodByClick);
      this.cardAmount = this.data.cartList.length;
    }else{
      this.data.cartList.forEach(element=>{
        if(element.id == this.foodByClick.id){
          element.amount += this.amount;
          return console.log(element.amount);
        }
      });
    }

  }

  goCard(){
    this.router.navigateByUrl("/customer/cart");
  }
}

class foods{
  id : any;
  name : any;
  price : any;
  detail : any;
  url : any;
  type : any;
  amount : any;

  constructor(id : number
            , name : string
            , price : number
            , detail : string
            , url : string
            , type : number){
    this.id = id;
    this.name = name;
    this.price = price;
    this.detail = detail;
    this.url = url;
    this.type = type;
  }
}


class user{
  username :any;
  id :any;
  pass : any;
  cast : any;

}
