import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AccessToken } from '../interface/Login';
import{History} from '../interface/History'
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history:History[]
  constructor(private http:Http) {
    
   }

  ngOnInit() {
    this.loadData()
  }
loadData(){
  let access_token:AccessToken={}
access_token=JSON.parse(localStorage.getItem('user'))
  let myheaders :Headers= new Headers()
  myheaders.append('Authorization',access_token.access_token)
  let options = new RequestOptions({headers:myheaders})
  this.http.get('/api/tasks?page=1',options).subscribe(res=>{
    let val :any = res.json();
    this.history= val;
    this.history.forEach((a)=>{
      a.createdAt = new Date(a.createdAt)
      a.expiresIn= new Date(a.expiresIn)
      
      a.expiresIn= new Date(a.expiresIn.getTime()-a.createdAt.getTime())
      console.log(a.expiresIn)
     
      
    })
    console.log(this.history)
  })
}
}
