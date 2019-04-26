import { Component, OnInit } from '@angular/core';
import { Topic } from '../interface/Topics';
import { Http } from '@angular/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreatExamComponent } from '../creat-exam/creat-exam.component';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit {
   topics:Topic[]
   role:number
  constructor(private http:Http,private modalService: NgbModal) {
    this.topics=[]
   }

  ngOnInit() {
    this.loadData()
  }
  async loadData(){
   this.http.get('api/subjects?page=1').subscribe(res=>{
    this.role = JSON.parse(localStorage.getItem('user')).role
     let val:any = res.json();
     if(val.success==true){
       this.topics=val.subjects
       console.log(this.topics)
     }
   })
  }
  open(id:number) {
    const modalRef = this.modalService.open(CreatExamComponent);
    modalRef.componentInstance.name = id;
  }

}
