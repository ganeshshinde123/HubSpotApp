import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { BookmeetComponent } from './bookmeet/bookmeet.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoomserviceComponent } from './roomservice/roomservice.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeLogoutComponent } from './home-logout/home-logout.component';
import { AdminhistoryComponent } from './adminhistory/adminhistory.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},


  {path:"home",component:HomeComponent,
    // children:[{path:"userprofile" , component:UserProfileComponent}]
  },
  
  {path:"userprofile",component:UserProfileComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"roomservice",component:RoomserviceComponent},
  {path:"bookingservice",component:BookmeetComponent},
  {path:"bookinghistory",component:BookinghistoryComponent},
  {path:"booking",component:BookmeetComponent},

  {path:"logouthome",component:HomeLogoutComponent},
  {path:"adminview",component:AdminhistoryComponent},
  {path:"crud",component:AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
