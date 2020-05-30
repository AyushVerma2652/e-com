import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  plus =faPlus;
  minus = faMinus;
  sum=0;
  user;

  constructor(public cartservice: CartService , private router: Router) { }

  ngOnInit(): void {
    this.user= JSON.parse(sessionStorage.getItem('user'));
    this.calculateTotal();
    
    
  }
  emptycart(){
    this.cartservice.emptycart();
    this.sum=0;
  }
  addquantity(index){
   this.cartservice.cartitems[index].quantity++
   this.calculateTotal();
   this.cartservice.savecart();
  }
  removequantity(index){
    let cartitems=this.cartservice.cartitems;
    if(cartitems[index].quantity>1){
      cartitems[index].quantity--
    }
    else{
      cartitems.splice(index,1);
      console.log(cartitems);
    }
    this.calculateTotal();
    this.cartservice.cartitems=cartitems;
    console.log(this.cartservice.cartitems);
    this.cartservice.savecart();

    
  }
  calculateTotal(){
    this.sum=0;
    // if(!this.cartservice.cartitems.length){
       
    //    return;
    // }
    for(let item of this.cartservice.cartitems){
    
      this.sum+= item.data.price*item.quantity;
    }
  }
  checkout(){
    let order ={cart: this.cartservice.cartitems , amount: this.sum, user:this.user._id, created:new Date()};
    sessionStorage.setItem('order',JSON.stringify(order));
    this.router.navigate(['/payment']);    
  }

}
