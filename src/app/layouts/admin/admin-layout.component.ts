import {Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit} from '@angular/core';
import 'rxjs/add/operator/filter';
import {state, style, transition, animate, trigger, AUTO_STYLE} from '@angular/animations';

import { MenuItems } from '../../shared/menu-items/menu-items';
import { AccessToken } from '../../interface/Login';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

export interface Options {
  heading?: string;
  removeFooter?: boolean;
  mapHeader?: boolean;
}

@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('mobileMenuTop', [
        state('no-block, void',
            style({
                overflow: 'hidden',
                height: '0px',
            })
        ),
        state('yes-block',
            style({
                height: AUTO_STYLE,
            })
        ),
        transition('no-block <=> yes-block', [
            animate('400ms ease-in-out')
        ])
    ])
  ]
})

export class AdminLayoutComponent implements OnInit {
  deviceType = 'desktop';
  verticalNavType = 'expanded';
  verticalEffect = 'shrink';
  innerHeight: string;
  isCollapsedMobile = 'no-block';
  isCollapsedSideBar = 'no-block';
  toggleOn = true;
  windowWidth: number;
  notifications:Notification[]=[]
  role:number

  public htmlButton: string;
  user :AccessToken
  constructor(public menuItems: MenuItems,private http:Http,private router:Router) {
    const scrollHeight = window.screen.height - 150;
    this.innerHeight = scrollHeight + 'px';
    this.windowWidth = window.innerWidth;
    this.setMenuAttributs(this.windowWidth);

    
    this. getNotification()
  }

  ngOnInit() {
    this.user= JSON.parse(localStorage.getItem('user'))
    this.role= this.user.role
   
  }

  onClickedOutside(e: Event) {
      if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
          this.toggleOn = true;
          this.verticalNavType = 'offcanvas';
      }
  }

  onResize(event) {
    this.innerHeight = event.target.innerHeight + 'px';
    /* menu responsive */
    this.windowWidth = event.target.innerWidth;
    let reSizeFlag = true;
    if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
      reSizeFlag = false;
    } else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
      reSizeFlag = false;
    }

    if (reSizeFlag) {
      this.setMenuAttributs(this.windowWidth);
    }
  }

  setMenuAttributs(windowWidth) {
      if (windowWidth >= 768 && windowWidth <= 1024) {
        this.deviceType = 'tablet';
        this.verticalNavType = 'collapsed';
        this.verticalEffect = 'push';
      } else if (windowWidth < 768) {
        this.deviceType = 'mobile';
        this.verticalNavType = 'offcanvas';
        this.verticalEffect = 'overlay';
      } else {
        this.deviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
      }
  }

  toggleOpened() {
    if (this.windowWidth < 768) {
        this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
        this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    } else {
        this.verticalNavType = this.verticalNavType === 'expanded' ? 'collapsed' : 'expanded';
    }
  }

  toggleOpenedSidebar() {
    this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
  }

  onMobileMenu() {
    this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
  }
  logout(){
    localStorage.removeItem('user')
    this.router.navigate(["/login"]);
  }
  getNotification(){
  
  let access_token: AccessToken = {}  
access_token = JSON.parse(localStorage.getItem('user'))
let myheaders: Headers = new Headers()
myheaders.append('Authorization', access_token.access_token)
let options = new RequestOptions({ headers: myheaders })
    this.http.get(`api/notifications`,options).subscribe(res=>{
      console.log(res)
      let val = res.json();
      if(val.success==true){
          this.notifications= val.notification
      }
      
    })
  }
}
