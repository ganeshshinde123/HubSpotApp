
import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginform:FormGroup;
  constructor(private userService:UserserviceService,private logForm:FormBuilder){
    this.loginform = logForm.group({
      email:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      password:['',Validators.compose([Validators.required,Validators.minLength(5)])]
    })
  }

  login(){
    
      console.log(this.loginform.value);
      this.userService.dologin(this.loginform.value);
      alert("login success")
 
      alert("Enter valid details")
    
  }
}
