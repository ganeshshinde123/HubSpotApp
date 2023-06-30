import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../login/User';
import { Register } from '../register/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  result:User
  regitser:Register
  constructor(private httpClient:HttpClient) { 
   this.result=new User();
   this.regitser=new Register();
  }
  UserUrl :string="http://localhost:8080/api/v2/getUsrByEmail"; 

  dologin(uObj:User):Observable<User>{
    console.log(uObj.email)
    return this.httpClient.post<User>(this.UserUrl,uObj)
    
  }

  addUser(rObj:Register):Observable<Register>{
 
 return this.httpClient.post<Register>("http://localhost:8080/api/v1/user",rObj)
 
  }
}
