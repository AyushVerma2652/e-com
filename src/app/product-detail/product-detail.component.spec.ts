import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { MailService } from '../mail.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,],
      providers: [MailService ,HttpClient , HttpHandler, HttpClientModule , ActivatedRoute, ProductService, CartService],
      declarations: [ ProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
