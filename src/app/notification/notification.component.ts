import { Component, OnInit } from '@angular/core';
import { Notification } from '../interface/Notification';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AccessToken } from '../interface/Login';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  data:Notification
  constructor(private htttp:Http) { 
    this.data={condition:{}}
  }

  ngOnInit() {
  }
  createNotification(){
console.log(this.data)
let access_token: AccessToken = {}
access_token = JSON.parse(localStorage.getItem('user'))
let myheaders: Headers = new Headers()
myheaders.append('Authorization', access_token.access_token)
let options = new RequestOptions({ headers: myheaders })
this.htttp.post(`api/notifications`,this.data,options).subscribe(res=>{
  let val = res.json()
  if(val.success==true){
    confirm('Tạo thông báo thành công')
  }
})
  }
}
