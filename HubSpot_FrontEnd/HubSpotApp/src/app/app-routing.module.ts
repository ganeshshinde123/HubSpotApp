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
import { RoomTourComponent } from './room-tour/room-tour.component';
import { ResourcesComponent } from './resources/resources.component';
import { PartnersComponent } from './partners/partners.component';
import { LocationComponent } from './location/location.component';
import { FaqComponent } from './faq/faq.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaypalComponent } from './paypal/paypal.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  // {path:"" , redirectTo="homelogout", pathMatch:"full"}

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
  {path:"roomtour",component:RoomTourComponent},
  {path:"resource",component:ResourcesComponent},
  {path:"partner",component:PartnersComponent},
  {path:"location",component:LocationComponent},
  {path:"admindash",component:AdmindashboardComponent},
  {path:"adminLogin",component:AdminloginComponent},
  {path:"payment",component:PaypalComponent},
  {path:"invoice",component:InvoiceComponent},
 
  {path:"logouthome",component:HomeLogoutComponent},
  {path:"adminview",component:AdminhistoryComponent},
  {path:"crud",component:AdminComponent},
  {path:"faq",component:FaqComponent},
  {path:"faq",component:AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
