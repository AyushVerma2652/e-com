import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  all_products;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList(){
    this.productService.getallproducts().subscribe(data => {
      console.log(data);
      this.all_products = data;
    })
  }

}
