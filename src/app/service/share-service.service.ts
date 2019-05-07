import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { AccessToken } from '../interface/Login';
import { RequestOptions, Headers, Http, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShareServiceService {
   access:AccessToken
  constructor(private http:Http) { 
    this.access= JSON.parse(localStorage.getItem('user'))
  }
   getRole():number{
   
    let role= this.access.role
    console.log(role)
     return role
   }
   getHeaders(){
  
   
    let myheaders: Headers = new Headers()
    myheaders.append('Authorization', this.access.access_token)
    return  new RequestOptions({ headers: myheaders })
     
   }
   

   
}
