import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedin = false;

  constructor(private userservice: UserService) { 
    if(sessionStorage.getItem('user')){
      this.loggedin = true;
    }
  }

  login(loginform){
    this.userservice.getUserByUsername(loginform.username).subscribe(data => {
      let req_user = data;

      if(req_user){
        if(req_user['password'] == loginform['password']){
          sessionStorage.setItem('user', JSON.stringify(req_user) );
          this.loggedin = true;
          console.log('login success');
          return;
        }
        console.log('wrong password');
        return;
      }
      console.log('user not exists');
      return;
    })
  }

  logout(){

  }
}
