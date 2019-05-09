import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AccessToken } from '../interface/Login';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  customer:User
  sex:['female','male']
  model: NgbDateStruct
  constructor(private http:Http,private userService : UserService) { 
    this.customer={}
  }

  ngOnInit() {
 this.userService.getProfile().then(val=>{
  if(val.success= true){

    this.customer= val.user
    this.customer.birthday= new Date(this.customer.birthday)
    this.model = {year: this.customer.birthday.getFullYear(), month:this.customer.birthday.getMonth(),day:this.customer.birthday.getDay() }
    this.customer.birthday = {year: this.customer.birthday.getFullYear(), month:this.customer.birthday.getMonth(),day:this.customer.birthday.getDay() }
    console.log( this.customer.birthday)
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
 this.model=this.customer.birthday
  this.customer.birthday= new Date(date.year,date.month,date.day)
  console.log(this.customer.birthday)
  this.http.put('/api/profile',this.customer,options).subscribe(res=>{
    let val = res.json();
    
       confirm(val.message)
       this.customer.birthday= this.model
    
  })
}
}
