import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartitems;

  constructor() { 
   
    this.cartitems = JSON.parse(sessionStorage.getItem("cart"))
    if (!this.cartitems){
      this.cartitems = [];
    }
  }

  additem(item){
   this.cartitems.push(item);
   this.savecart();
   console.log(this.cartitems);
  }
  removeitem(item){
  this.cartitems.slice(item);
  }
  emptycart(){
    this.cartitems=[];
    this.savecart();
  }
  getcartitems(){
    return this.cartitems
  }
  savecart(){
    sessionStorage.setItem("cart",JSON.stringify(this.cartitems))
  }
}
