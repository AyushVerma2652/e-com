import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedin=false;
  url= "http://localhost:3000/user"
  constructor(private http: HttpClient , private router : Router) { if(sessionStorage.getItem('user')){
    this.loggedin=true;
  } }


  addUser(formdata){
    return this.http.post(this.url+'/add', formdata);
  }
  getAllUsers(){
    return this.http.get(this.url+'/getall');
  }

  getUserById(id){
    return this.http.get(this.url+`/getbyid/${id}`);
  }

  getUserByUsername(username){
    return this.http.get(this.url+`/getbyusername/${username}`);
  }

  updateUser( id , data){
    return this.http.put(this.url+`/update/${id}`, data);
  }

  delete(id){
    return this.http.delete(this.url+`/delete/${id}`);
  }
  logout(){
    this.loggedin=false;
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('admin');
    this.router.navigate(['/login']);
    sessionStorage.removeItem('cart');
  }
  addAddress( id , data){
    return this.http.put(this.url+`/addaddress/${id}`, data);
  }
  uploadImage(file){
    return this.http.post(this.url+'/addimg',file)
  }
  getUserByEmail(email){
    return this.http.get(this.url+'/getbyemail/'+email);
  }
  changePassword(id,password){
    return this.http.put(this.url+`/changepassword/${id}`, {password : password})
    }


}
