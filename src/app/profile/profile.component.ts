import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AccessToken } from '../interface/Login';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  customer:User
  constructor(private http:Http,private userService : UserService) { 
    this.customer={}
  }

  ngOnInit() {
 this.userService.getProfile().then(val=>{
  if(val.success= true){

    this.customer= val.user
    console.log(this.customer.birthday)
 }else{
   confirm("Có lỗi xảy ra ")
 }
 })
  }
 
onSubmit(){
  let access_token:AccessToken={}
access_token=JSON.parse(localStorage.getItem('user'))
  let myheaders :Headers= new Headers()
  myheaders.append('Authorization',access_token.access_token)
  let options = new RequestOptions({headers:myheaders})
  let date = this.customer.birthday
 
  this.customer.birthday= new Date(date.year,date.month,date.day)
  console.log(this.customer.birthday)
  this.http.put('/api/profile',this.customer,options).subscribe(res=>{
    let val = res.json();
    
       confirm(val.message)
    
  })
}
}
