import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Login, Access } from '../../../interface/Login';
import { LoginServiceService } from '../../../service/login-service.service';

@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html'
})
export class WithSocialComponent implements OnInit {
  customer:Login
  constructor(private loginservice :LoginServiceService) {
    this.customer={}
   }
       
  ngOnInit() {
  }
  onSubmit(){
  this.loginservice.login(this.customer)
  }
}
