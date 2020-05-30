import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.css']
})
export class ManageAddressComponent implements OnInit {

  user;
  addressform;
  constructor(private formbuilder: FormBuilder , private userservice: UserService) { }

  ngOnInit(): void {
    this.user= JSON.parse(sessionStorage.getItem('user'));
    this.initform();
  }

  initform(){
    this.addressform = this.formbuilder.group({
      house : '',
      area :'',
      city :'',
      landmark : '',
      state : '',
      country :'',
    })
  }
  userSubmit(formdata){
    console.log(formdata);

    this.user.address.push(formdata);
    this.userservice.updateUser(this.user._id,{address : this.user.address}).subscribe(data =>{
     console.log(data);
    })
  }

  returnControls(){
    return this.addressform.controls;
  }

}
