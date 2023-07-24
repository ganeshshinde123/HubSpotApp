import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserserviceService } from './services/userservice.service';

@Injectable()

export class AuthGuard implements CanActivate 
{
  constructor(private authService: UserserviceService, private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isUserAuthenticated().pipe(
      map((isAuthenticated: any) => {
        if (isAuthenticated) {
          console.log(isAuthenticated)
          return true;
        } else {
          return this.router.createUrlTree(['/adminLogin']);
        }
      })
    );
  }
}