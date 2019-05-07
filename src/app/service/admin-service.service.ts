import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ShareServiceService } from './share-service.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminServiceService implements CanActivate {

  
  constructor(  private router: Router,private share:ShareServiceService) {
  
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
   if(this.share.getRole()==3){
        return true
   }
   this.router.navigate(["/dashboard"]);
     return false
   
   
 }
}
