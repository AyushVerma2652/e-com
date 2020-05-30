import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { fas } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {

  constructor(config:NgbCarouselConfig, private productservice: ProductService, private router: Router) {
    config.interval=1000;
    config.wrap=false;
    config.keyboard=false;
    config.pauseOnHover=false;
   }

  ngOnInit(): void {
    AOS.init();
  }
  browse(category='',brand=''){
    this.productservice.category=category;
    this.productservice.brand=brand;
    this.router.navigate(['/browse']);
    
  }
}
