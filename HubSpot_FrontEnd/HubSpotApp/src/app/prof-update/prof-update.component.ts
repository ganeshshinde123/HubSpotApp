import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteService } from '../services/route.service';
import { RegisterService } from '../services/register.service';
import { Register } from '../register/register';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-prof-update',
  templateUrl: './prof-update.component.html',
  styleUrls: ['./prof-update.component.css']
})
export class ProfUpdateComponent {

  updateform:FormGroup
  user:Register
  constructor(private regform:FormBuilder,private http:HttpClient,private route:RouteService,private userSer:UserserviceService){
  this.user=new Register()
  this.updateform = regform.group({

    firstName:['',Validators.required],
    lastName:[''],
    email:['',Validators.required],
    mobileNumber:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    companyName:['',Validators.required],
    age:[,Validators.required],
    gender:[''],
    password:['',Validators.required]
  })
}
ngOnInit(){
  this.userSer.getProfile().subscribe(
    data=>{this.user=data},
    err=>{console.log(err);
    }
  )
}
update(updateform:FormGroup){
  this.userSer.updateProf(updateform.value).subscribe(
    data=>{console.log(data)},
      err=>{console.log(err);
      
    }
  )
}
goBack(){
  this.route.routeBack();
}
}
