import { StorageUserService } from './../services/storge-user.service';
import { AuthServiceService } from './../services/auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService:AuthServiceService , private router:Router , private storageService: StorageUserService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      if(this.AuthService.isLoggedInUser()){
        console.log("this.AuthService.isLoggedInUser()", this.AuthService.isLoggedInUser());

        return true
      }
      else{
        this.router.navigate(['/login'],{
          // queryParams:{
          //   returnUrl: state.url
          // }
        })
        return false
      }
  }

}
