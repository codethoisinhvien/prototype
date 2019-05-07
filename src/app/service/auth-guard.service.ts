import { Injectable, state } from '@angular/core';
import { CanActivateChild, CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements  CanActivateChild {

  constructor(  private router: Router) {
  
   }

   canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(localStorage.getItem('user')!=null){
         return true
    }
    this.router.navigate(["/login"]);
      return false
    
    
  }

}
