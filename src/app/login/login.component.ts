import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform;
  cuser;
  constructor(private formbuilder: FormBuilder, private authservice: AuthService, private router: Router , private userService: UserService )   { }

  ngOnInit() {
    this.initForm();
    document.body.classList.add('bg-lg')
  }

  initForm(){
    this.loginform = this.formbuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  loginsubmit(formdata){

    this.userService.getUserByUsername(formdata.username).subscribe(data => {
      let logged_user = data;

      if (logged_user){
         
        if(logged_user['password'] == formdata['password']){

          // add user details to session storage
           sessionStorage.setItem('user', JSON.stringify(logged_user));
           //sessionStorage.setItem('admin', JSON.stringify(true));
           this.userService.loggedin=true;
          if(logged_user['admin']){
            // navigate to admin dashboard
             this.router.navigate(['/admin'])
             return;
          }
          else{
            // navigate to home
            this.router.navigate(['/home'])
            return;
          }
        }else{
          Swal.fire({
            icon : 'error',
            title : 'oops!',
            text : 'you username or password is incorrect',
          })
        }
      }else{
        Swal.fire({
          icon : 'error',
          title : 'oops!',
          text : 'you username or password is incorrect',
        })
      }
    })
    //this.authservice.login(formdata);
    //console.log(formdata)
  }

  
    

  
  returnControls(name){
    return this.loginform.controls[name];
  }
 
  ngOnDestroy() {  
    document.body.classList.remove('bg-lg')
  }

  forgotpassword(){
    this.router.navigate(['/forgot']);
  }
    
  

}
