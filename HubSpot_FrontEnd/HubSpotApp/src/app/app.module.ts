import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserserviceService } from './services/userservice.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { BookmeetComponent } from './bookmeet/bookmeet.component';
import { AdditemComponent } from './additem/additem.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouteService } from './services/route.service';
import { RoomServiceService } from './services/room-service.service';
import { CustomerService } from './services/customer.service';
import { RoomserviceComponent } from './roomservice/roomservice.component';
import { PartnersComponent } from './partners/partners.component';
import { RoomTourComponent } from './room-tour/room-tour.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeLogoutComponent } from './home-logout/home-logout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaypalComponent } from './paypal/paypal.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhistoryComponent } from './adminhistory/adminhistory.component';
import { AdminnextComponent } from './adminnext/adminnext.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    CustomerComponent,
    BookinghistoryComponent,
    BookmeetComponent,
    AdditemComponent,
    UserProfileComponent,
    RoomserviceComponent,
    PartnersComponent,
    RoomTourComponent,
    ResourcesComponent,
    HomeLogoutComponent,
    InvoiceComponent,
    PaypalComponent,
    PaymentComponent,
    AdminComponent,
    AdminhistoryComponent,
    AdminnextComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    NgFor,
    MatExpansionModule,
    CommonModule,
  ],
  providers: [UserserviceService,RouteService,RoomServiceService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
