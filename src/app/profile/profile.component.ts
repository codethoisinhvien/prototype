import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AccessToken } from '../interface/Login';
import { User } from '../interface/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  customer:User
  constructor(private http:Http) { 
    this.customer={}
  }

  ngOnInit() {
  this.loadData()
  }
async loadData(){
let access_token:AccessToken={}
access_token=JSON.parse(localStorage.getItem('user'))
  let myheaders :Headers= new Headers()
  myheaders.append('Authorization',access_token.access_token)
  let options = new RequestOptions({headers:myheaders})
  await this.http.get('api/profile',options).subscribe(res=>{
    let val = res.json();
    if(val.success= true){

       this.customer= val.user
       console.log(this.customer.birthday)
    }else{
      confirm("Có lỗi xảy ra ")
    }
  })
  console.log(1)
}
onSubmit(){
  let access_token:AccessToken={}
access_token=JSON.parse(localStorage.getItem('user'))
  let myheaders :Headers= new Headers()
  myheaders.append('Authorization',access_token.access_token)
  let options = new RequestOptions({headers:myheaders})
  
  this.http.put('/api/profile',this.customer,options).subscribe(res=>{
    let val = res.json();
    
       confirm(val.message)
    
  })
}
}
