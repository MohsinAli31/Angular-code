import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardsGuard implements CanActivate {
  constructor(private service: SharedService, private router: Router) {}
  canActivate(): any {
    console.log('auth service', this.service.isAuthenticated());
    if (this.service.isAuthenticated()) {
      console.log('auth', this.service.isAuthenticated());
      console.log('you are authorized');
      this.router.navigate(['dashboard']);
    } else {
      return !this.service.isAuthenticated();
    }
  }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {
  //   return true;
  // }
}
