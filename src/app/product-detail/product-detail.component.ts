import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class ProductDetailComponent implements OnInit {

 currentUser;
 product;
 reviews;
 userreview;
 quantity=1;
 addedtocart = false;
 
  constructor(private productservice : ProductService , private activated : ActivatedRoute, private cartservice: CartService) { }

  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id');
    this.productservice.getProductById(id).subscribe(data => {
      this.currentUser = JSON.parse(sessionStorage.getItem('user'));
      console.log(data);
      this.product = data;
      this.getReviews();
      //this.getUserReview();
      document.body.classList.add('detail')
      this.checkitemincart();
  })
  

  }
  getReviews(){
    this.productservice.fetchReviewsbyProduct(this.product._id).subscribe(data => { 
      this.reviews = data;
      console.log(data);
    })

  }

  getUserReview(){
    for(let review of this.reviews){
      if(review.user==this.currentUser._id){
        this.userreview=review;
      }
    }
  }
  addtocart(){
let cartitem = {data:this.product,quantity:this.quantity}
this.cartservice.additem(cartitem);
this.checkitemincart();
  }

  checkitemincart(){
    let cartitems = this.cartservice.cartitems;
    for(let item of cartitems){
      if(item.data._id==this.product._id){
        this.addedtocart=true;
      }
    }
  }
}
