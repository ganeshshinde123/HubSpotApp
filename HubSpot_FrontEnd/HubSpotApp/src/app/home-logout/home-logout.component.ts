import { Component } from '@angular/core';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-home-logout',
  templateUrl: './home-logout.component.html',
  styleUrls: ['./home-logout.component.css']
})
export class HomeLogoutComponent {
constructor(private route:RouteService){

}

}
