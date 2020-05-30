import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
 orders;
  constructor(private orderservice : OrderServiceService, userservice: UserService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.orderservice.getAllOrders().subscribe( (orders)=> {
      this.orders = orders;
      console.log(orders);
    })
  }


}
