import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import {faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  all_products;
  searchby='name';
  start=0;
  len=6;
  end=this.start+this.len;
  page=1;
  right = faArrowRight;
  left = faArrowLeft;
  
  
  constructor(private productService: ProductService, private activated: ActivatedRoute, private cartservice: CartService ) { }

  ngOnInit() {
    let category = this.productService.category;
    let brand = this.productService.brand;
    this.refreshList(category ,brand);
    
  }

  refreshList(category="", brand=""){
    this.productService.getallproducts().subscribe(data => {
      
      this.all_products = data;
      console.log(category,brand)
      if(category){
        this.all_products=this.all_products.filter(product =>{
          return product.category.toLowerCase()==category.toLowerCase();   
        })
      }
       if(brand){
        this.all_products=this.all_products.filter(product =>{
          return product.brand==brand;
        })
      }
      console.log(data);
    })
  }

  searchbybrand(brand){
    this.productService.getallproducts().subscribe(data =>{
      console.log(data);
      this.all_products = data;
      this.all_products=this.all_products.filter(product =>{
        return product.brand=brand;
      })
    })
    console.log(this.all_products);
  }

  searchbycategory(category){
    // this.refreshList();
    this.productService.getallproducts().subscribe(data => {
      console.log(data);
      this.all_products = data;
      this.all_products=this.all_products.filter(product =>{
        return product.category==category   
      })      
    })
    console.log(this.all_products);
  }

  getAllProducts(query = '', sort = false, reverse = false, sortprice = false){
    this.productService.getallproducts().subscribe(data => {
      console.log(data);
      this.all_products=data;
 
      if(query){
        if(this.searchby == 'name'){
          this.all_products = this.all_products.filter(product => {
            return product.productname.toLowerCase().includes(query.toLowerCase())
          })
        }
        
      }
    })
  }
 
  search(query){
    this.getAllProducts(query = query);
  }
 
  sort(reverse = false){
    if(reverse)
    {
      this.all_products.sort((product1, product2) => {
        if (product1.productname < product2.productname) {
          return 1;
        }else{
          return -1;
        }
      })
    }
    else{
    this.all_products.sort((product1, product2) => {
      if (product1.productname > product2.productname) {
        return 1;
      }else{
        return -1;
      }
    })}

  }
 
  sortprice(){
    this.all_products.sort((product1, product2) => {
      if (product1.price > product2.price) {
        return 1;
      }else if(product1.price < product2.price){
        return -1;
      }else{
        return 0;
      }
    })
  }

  addtocart(product){
    let cartitem = {data: product, quantity: 1}
    if(!this.itemincart(product)){
    this.cartservice.additem(cartitem);
    }
    }

    itemincart(product){
      let cartitems = this.cartservice.cartitems;
      for(let item of cartitems){
      if(item.data._id==product._id){
      // this.addedtocart = true;
      return true;
      }
      return false;
      }
      }
 
      next(products){
        if((this.end+this.len)<=products.length){
          this.start = this.end;
          this.end+=this.len;
          this.page +=1;
        }
     
        console.log(this.start+' '+this.end)
      }
     
      prev(){
        if((this.start-this.len)>-1){
          this.end = this.start;
          this.start-=this.len;
          this.page -=1;
        }
     
        console.log(this.start+' '+this.end)
      }

}
