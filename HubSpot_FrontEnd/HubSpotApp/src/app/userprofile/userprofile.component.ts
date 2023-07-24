import { Component } from '@angular/core';

import { UserserviceService } from '../services/userservice.service';
import { Register } from '../register/register';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
user:Register
constructor(private userServ:UserserviceService,private router:RouteService){
  this.user=new Register();
}
ngOnInit(){
  this.userServ.getProfile().subscribe(
    data=>{console.log(data),this.user=data},
    err=>{console.log(err);
    }
  );
}

updateProf(){
  this.router.routeToupdateUser();
}
}
