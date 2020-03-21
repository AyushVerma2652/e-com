import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  users;
  editForm;
  showEditForm = false;
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  
  ngOnInit() {

    
    this.getData();
  }

  getData(){
    this.userService.getAllUsers().subscribe( (users)=> {
      this.users = users;
      this.initForm(users);
    })
  }

  initForm(data){
    this.editForm = this.formBuilder.group(data);
    console.log(this.editForm.value);
  }

  closeForm(){
    this.showEditForm = false;
  }

  onUpdateSubmit(formdata){
    console.log(formdata.value)
    this.userService.updateUser(formdata.value, formdata.value._id).subscribe(message => console.log(message));
    this.closeForm();
  }

  delete(id){
    this.userService.delete(id).subscribe((response)=>{
      console.log(response);
      this.getData();
    })
  }

  editData(user){
    this.initForm(user);
    this.showEditForm = true;
  }

}