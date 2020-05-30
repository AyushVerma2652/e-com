import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { OrderServiceService } from '../order-service.service';
 
@Component({
 selector: 'app-admin-dashboard',
 templateUrl: './admin-dashboard.component.html',
 styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 admin;
 adminform;
 showorders=false;
 showmanageuser=false;
 showstats=false;
 users;
 orders;
 
 constructor(private fb: FormBuilder, private userservice: UserService , private orderservice : OrderServiceService) { }
 
 ngOnInit(): void {
 this.admin = JSON.parse(sessionStorage.getItem('user'));
 this. getData();
 this.getData2();
 
 }
 
 toggleManageUser(){
  this.hideAll();
 this.showmanageuser=true;
 }
 
 toggleShowOrder(){
  this.hideAll();
 this.showorders=true;
 
 }
 togglestats(){
     this.hideAll();
     this.showstats=true;
 }
 hideAll(){
    this.showmanageuser=false;  
    this.showorders=false;
    this.showstats=false;
 }
 getData(){
    this.userservice.getAllUsers().subscribe( (users)=> {
      this.users = users;  
    })
  }
  getData2(){
    this.orderservice.getAllOrders().subscribe((orders)=>{
      this.orders=orders;
      console.log(orders);
    })
  }

}
 
