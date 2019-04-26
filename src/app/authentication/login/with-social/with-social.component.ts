import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Login, Access } from '../../../interface/Login';

@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html'
})
export class WithSocialComponent implements OnInit {
  customer:Login
  constructor(private http:Http) {
    this.customer={}
   }
       
  ngOnInit() {
  }
  onSubmit(){
  console.log(this.customer)
  this.http.post('api/login',this.customer).subscribe(res=>{
    
   let val  = res.json();
   console.log(val)
   if(val.success==true){
     localStorage.setItem('user',JSON.stringify(val));
      
     confirm('Thành công')
   }else{
     confirm(val.message)
   }

  })
  }

}
