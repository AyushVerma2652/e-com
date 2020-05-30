import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ManagePasswordComponent } from './manage-password/manage-password.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { ContactComponent } from './contact/contact.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginGuard } from './guards/login.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { AdminGuard } from './guards/admin.guard';



const routes: Routes = [
  {path : 'register', component : RegisterComponent},
  {path : 'admin', component : AdminDashboardComponent,canActivate:[AdminGuard]},
  {path : 'product', component: AddProductComponent},
  {path : 'login', component: LoginComponent},
  {path : 'browse', component: BrowseComponent},
  {path: "details/:id", component: ProductDetailComponent},
  {path: "home", component:HomeComponent},
  {path: "dash", component:UserDashboardComponent, canActivate:[LoginGuard]},
  {path : "forgot", component: ManagePasswordComponent},
  {path :"manageaddress", component:ManageAddressComponent},
  {path : "contact" , component :ContactComponent},
  {path: "cart", component:CartComponent},
  {path: "payment", component: PaymentComponent},
  {path:"manageorder", component:ManageOrdersComponent},
  {path : 'browse', component: BrowseComponent},
  {path : '',redirectTo:'/login',pathMatch:'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
