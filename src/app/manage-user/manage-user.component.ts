import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  users;
  editForm;
  showEditForm = false;
  showAddForm;
  userform;
  
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  
  ngOnInit() {

    
    this.getData();
    document.body.classList.add('bg-rg')
    this.userform= this.formBuilder.group({
      name : ["", [Validators.required, Validators.maxLength(20)]],
      username : ["", Validators.required],
      password : ["", [Validators.required, Validators.minLength(5)]],
      confirm : [""],
      email : ["", Validators.required]
    },{ validator : this.matchPassword('password', 'confirm')}
    )
  

  }

  matchPassword(password, confirm_pass){
    return (userform) =>{
      let passControl = userform.controls[password];
      let confirmControl = userform.controls[confirm_pass];

      if(passControl.value !== confirmControl.value){
        confirmControl.setErrors({match: true})
      }else{
        confirmControl.setErrors(null)
      }
    }
    //return false
  }

  onSubmit(formdata){
    
    console.log(this.userform.controls);
    if(!this.userform.valid){
      //alert("Invalid form")
      return;
    }
    
    this.userService.addUser(formdata).subscribe(response=> {
      console.log(response);
      this.userform.reset();
      
    });

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

  returnControls(){
    return this.userform.controls;
  }

}