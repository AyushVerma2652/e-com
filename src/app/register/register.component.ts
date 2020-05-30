import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';``

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  userform;
  submitted=false;
  hide = true;
  selectedFile;
  imgURL;
  message;
  avatarName;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  

  ngOnInit() {
    document.body.classList.add('bg-rg')
    this.userform= this.formBuilder.group({
      name : ["", [Validators.required, Validators.maxLength(20)]],
      username : ["", Validators.required],
      password : ["", [Validators.required, Validators.minLength(5)]],
      confirm : [""],
      email : ["", Validators.required],
      phone : ["", [Validators.required, Validators.minLength(10)]],
      age : ["", Validators.required],
      admin:false,
      created : new Date,
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
  userSubmit(formdata){
    this.submitted=true;
    console.log(this.userform.controls);
    if(!this.userform.valid){
      //alert("Invalid form")
      return;
    }
    
    
    this.userService.getUserByUsername(formdata.username).subscribe( data => {
      if(!data){
      formdata.image= this.avatarName;
      this.userService.addUser(formdata).subscribe(response=> {
        console.log(response);
        this.userform.reset();
        this.submitted = false;
      });
       
      } else{
      Swal.fire({
      icon : 'error' ,
      title: 'Oops!',
      text: 'Username already exists!' ,
      })
      }
       
      })
    


  }
  returnControls(){
    return this.userform.controls;
  }
  ngOnDestroy(){
    document.body.classList.remove('bg-rg')
  }




  uploadImage(event)
  {
    let files = event.target.files;
    if(files.length===0)
      return;
 
    var mimeType=files[0].type;
    if(mimeType.match(/image\/*/)==null)
    { 
      Swal.fire("Images Only");
      return;
    }
    this.preview(event.target.files)
    let formData=new FormData();
    this.selectedFile=files[0];
    this.avatarName=this.selectedFile.name;
    console.log(this.avatarName);
    formData.append('image', this.selectedFile, this.selectedFile.name);
    this.userService.uploadImage(formData).subscribe(response=>
      {
      console.log(response['message'])
      })
  }  
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }



}
