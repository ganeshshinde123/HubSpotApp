import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../login/User';
import { Register } from '../register/register';
import { Observable, catchError, map, of } from 'rxjs';
import { RouteService } from './route.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 
  result:User
  users:User[];
  user:Register
  BearerToken:String;
  foundUser: User | undefined;

  UserUrl :string="http://localhost:8080/logauth/user/authUser"; 

  constructor(private httpClient:HttpClient,private router:RouteService) { 
    this.users=[];
    this.BearerToken="";
   this.result=new User();
   this.user=new Register();
  }
 
  ngOnInit(){
    
  }

  dologin(user:User):Observable<User>{
      return this.httpClient.post<User>("http://localhost:8080/auth/user/authUser",user);
  }
  setBearerToken(token:string){
    localStorage.setItem("Bearer ",token);
  }
  getBearerToken(){
    return localStorage.getItem("Bearer ");
  }
  setEmail(token:string){
    localStorage.setItem("email",token);
  }
  getEmail(){
    return localStorage.getItem("email");
  }


  isUserAuthenticated():Observable<boolean>{
    const token = this.getBearerToken();
    console.log("is called"+ token)
    return this.httpClient.post<boolean>(`http://localhost:8081/auth/user/isAuthenticated`,{},{
      headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)
      })
      .pipe(
         map(response => {
          console.log(response)
              if (response == true) {
                console.log("Activated..");
                   return true;
              } else {
                console.log("false deactivating")
              return false;
        }}
      ), 
      catchError(() => of(false)) 
    );
  }
  getProfile(){
    return this.httpClient.get<Register>(`http://localhost:8082/api/v3/getUser/${this.getEmail()}`);
  }
  updateProf(reg:Register){
    return this.httpClient.put<Register>(`http://localhost:8082/api/v3/updateUser/${this.getEmail()}`,reg);
  }
}
