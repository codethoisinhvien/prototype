import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginServiceService implements  CanActivateChild {

  constructor(private router:Router) { }
  canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(localStorage.getItem('user')!=null){
      this.router.navigate(["/dashboard"]);
         return false
    }
    
      return true
    
    
  }
}
