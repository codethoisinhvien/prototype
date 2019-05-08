import { Injectable } from '@angular/core';
import { ShareServiceService } from './share-service.service';
import { Http } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService implements CanActivate{

  constructor( private share: ShareServiceService,private http:Http,private router:Router) {

   }
   getProfile():Promise<any>{
     return this.http.get('api/profile',this.share.getHeaders())
     .toPromise()
     .then(val=>val.json())
     .catch()
   }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(this.share.getRole()==1){
         return true
    }
    this.router.navigate(["/dashboard"]);
      return false
    
    
  }

}
