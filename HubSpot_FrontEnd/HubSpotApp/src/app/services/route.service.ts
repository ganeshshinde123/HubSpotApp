import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router:Router,private location:Location) { }
  routeToLogin(){
    this.router.navigate(['login'])
 }
 routeToHome(){
    this.router.navigate(['home'])
 }
 routeToRegister(){
    this.router.navigate(['register'])
 }
 routeToProfile(){
  this.router.navigate(['user-profile'])
 }
 routeToLogoutHome(){
   this.router.navigate(['logouthome'])
  }
  routeToBookMeet(){
   this.router.navigate(['booking'])
  }
  routeToAdminView(){
   this.router.navigate(['adminview']);
  }
  routeToAdminDash(){
   this.router.navigate(['admindash']);
  }
  routeToAdminCRUD(){
   this.router.navigate(['crud']);
  }
  routeToPayment(){
    this.router.navigate(['payment'])
  }
  routeToLow(){
    this.router.navigate([''])
  }
  routeToupdateUser(){
    this.router.navigate(['userUpdate']);
  }
  routeBack(){
    this.location.back();
  }
}
