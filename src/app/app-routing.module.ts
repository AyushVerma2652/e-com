import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';


const routes: Routes = [
  {path : 'register', component : RegisterComponent},
  {path : 'admin', component : AdminComponent},
  {path : 'product', component: AddProductComponent},
  {path : 'login', component: LoginComponent},
  {path : 'browse', component: BrowseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
