import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from './register';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   registerform:FormGroup
   registerd:Register
   
  constructor(private userService:UserserviceService,private regform:FormBuilder,private http:HttpClient){
    
    this.registerd = new Register()
    
    
    this.registerform = regform.group({

      firstName:['',Validators.required],
      lastName:[''],
      email:['',Validators.required],
      mobileNumber:['',Validators.required],
      companyName:['',Validators.required],
      password:['',Validators.required]
    })

   
  // }
  // register(){
  //   if(this.registerform.valid){

  //   }else{
  //     alert("please enter all fields..")
  //   }
    // this.userService.addUser(this.registform.value);
  }
  ngOnInit(): void {
    
  }
  register(){
    if(this.registerform.valid){
      console.log(this.registerform.value)
      this.userService.addUser(this.registerform.value).subscribe(
        data=>{this.registerd = data,alert("Hello "+data.firstName+" \n Welcome to Hubspot.")},
        err=>{console.log(err)}
      );
    // this.http.post("http://localhost:8080/api/v1/user",this.registerform.value).subscribe(
    //   data=>{console.log(data)},
    //   err=>{console.log(err)}
    // )
    console.log("user service called")
    alert("Heloo"+`${this.registerd.firstName}`)
    console.log(this.registerd)
    }else{
      alert("enter the valid details")
    }
  }
}
