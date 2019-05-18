import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('OnlyLoggedInUsers');
    if (this.userService.isloggedIn()) {
      return true;
    } else {
      window.alert('You don\'t have permission to view this page');
      return false;
    }
  }
}
