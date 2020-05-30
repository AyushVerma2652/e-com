import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BrowseComponent } from './browse/browse.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { RegisterComponent } from './register/register.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { MatFormFieldModule} from '@angular/material/form-field';
import  { MatIconModule } from '@angular/material/icon';
import  { MatCardModule } from '@angular/material/card';
import  { MatButtonModule} from '@angular/material/button';
import  { MatInputModule} from '@angular/material/input';




import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewsComponent } from './reviews/reviews.component';

import{ NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxStarRatingModule} from 'ngx-star-rating';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManagePasswordComponent } from './manage-password/manage-password.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';

import { WebstatsComponent } from './webstats/webstats.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { UserordersComponent } from './userorders/userorders.component';




@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    BrowseComponent,
    HeaderComponent,
    LoginComponent,
    ManageUserComponent,
    ManageProductComponent,
    RegisterComponent,
    ReviewsComponent,
    ProductDetailComponent,
    HomeComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ManagePasswordComponent,
    ManageAddressComponent,
    ManageOrdersComponent,
    CartComponent,
    ContactComponent,
    PaymentComponent,
    WebstatsComponent,
    UserordersComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   MatFormFieldModule,
     MatIconModule,
     MatInputModule,
     MatCardModule,
     MatButtonModule ,
    SweetAlert2Module,
    NgxStarRatingModule,
    NgbModule,
    FontAwesomeModule,
    MatExpansionModule,
   
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
