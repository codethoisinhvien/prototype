import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { User } from '../../interface/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   customer:User
  constructor(private http:Http) { 
    this.customer= {}
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.customer)
    this.http.post('/api/users',this.customer).subscribe(res=>{
      let val = res.json();
      console.log(val)
      if(val.success==true){
        this.customer={}
        confirm(val.message)
      }else{
        confirm(val.message)
      }
    })
  }

}
