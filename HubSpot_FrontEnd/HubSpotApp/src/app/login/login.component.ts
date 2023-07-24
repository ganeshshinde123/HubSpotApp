
import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { RouteService } from '../services/route.service';
import { User } from './User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User
  loginform:FormGroup;
  constructor(private userService:UserserviceService,private logForm:FormBuilder,private rooute:RouteService){
   this.user=new User()
    this.loginform = logForm.group({
      email:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.email],)],
      password:['',Validators.compose([Validators.required,Validators.minLength(5)])]
    })
  }
  login(){   
     if(this.loginform.valid){
      console.log(this.loginform.value);
     
      // alert("login success")
      this.user=this.loginform.value;
      this.userService.dologin(this.loginform.value).subscribe(
        (data:any)=>{alert("login success"),console.log(data),
        this.userService.setBearerToken(data['token']),this.userService.setEmail(this.loginform.value.email)
        ,this.rooute.routeToLogoutHome()},
        err=>{console.log(err),alert("Username or password is invalid"),this.rooute.routeToLogin()}
      )
     }else{
      console.log("wrong detaiils")
      alert("Enter valid details")
     }
    
  }
}

