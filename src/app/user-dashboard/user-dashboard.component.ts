import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
user;
showuserdetails=false;
showorders=false;
userform;
showmanageaddress = false;
showmanageorders=true;


  constructor(private fb : FormBuilder, private userservice : UserService)  { }

  ngOnInit() {
    this.user= JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user)
    this.initForm(this.user)
    //this.updateuser();
  }

  initForm(user){
   this.userform = this.fb.group(user)
  
  }

  toggleuserdetails(){
    this.hideAll();
    this.showuserdetails=true;
  }

  userSubmit(formdata){
    console.log(formdata);
  }

  returnControls(){
    return this.userform.controls 
  }

  togglemanageaddress(){
    this.hideAll();
    this.showmanageaddress = true;
  }
  togglemanageorders(){
    this.hideAll();
    this.showmanageorders=true;
  }

  updateuser(){
    this.userservice.getUserById(this.user._id).subscribe(data =>{
      sessionStorage.setItem("user",JSON.stringify(data))
      this.user = data;
    })
  }
  hideAll(){
    this.showmanageaddress = false;
    this.showmanageorders=false;
     this.showuserdetails=false;
  }
}
