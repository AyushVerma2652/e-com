import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { BrowseComponent } from './browse/browse.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { RegisterComponent } from './register/register.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

//import { MatFormFieldModule, MatIconModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';


import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    AdminComponent,
    BrowseComponent,
    HeaderComponent,
    LoginComponent,
    ManageUserComponent,
    ManageProductComponent,
    RegisterComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   // MatFormFieldModule,
    // MatIconModule,
    // MatInputModule,
    // MatCardModule,
    // MatButtonModule ,
    SweetAlert2Module,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
