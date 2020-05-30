import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedin;

  constructor(public userservice: UserService) { }

  ngOnInit() {
    let user = JSON.parse(sessionStorage.getItem('user'))
    if(user){
      this.loggedin = true;
    }
  }
  userlogout(){
    this.userservice.logout();
  }

}
