import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class LoginServiceService implements  CanActivateChild {

  constructor(private router:Router,private http:Http) { }
  canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(localStorage.getItem('user')!=null){
      this.router.navigate(["/dashboard"]);
         return false
    }
    
      return true
    
    
  }

  login(customer){
    this.http.post('api/login',customer).subscribe(res=>{
    
      let val  = res.json();
      console.log(val)
      if(val.success==true){
        localStorage.setItem('user',JSON.stringify(val));
         this.router.navigate(["/dashboard"])
       
      }else{
        confirm(val.message)
      }
   
     })
  }
}
