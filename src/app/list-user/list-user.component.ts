import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../interface/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from '../notification/notification.component';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  page:number=0
  users:User[]
  isChangeRole:boolean= false
  constructor(private http:Http,private modalService: NgbModal) { 
    
  }

  ngOnInit() {
    this.loadData()
  }
  loadData(){
    this.http.get(`api/users?${this.page}`).subscribe(res=>{
      console.log(res)
      let val = res.json();
      if(val.success== true){
        this.users= val.users
      }
    })
  }
  onChangeRole(item){
   console.log(item)
   this.http.put(`api/users/${item.id}`,{role:item.role}).subscribe(res=>{
     let val = res.json();
     if(val.success= true){
       confirm(`Đã thay đổi quyền của người dùng ${item.username} thành công `)
     }else{
      confirm(`${val.message}`)
     }
   })
  }
  createNotification(){
    this.modalService.open(NotificationComponent)
  }
}
