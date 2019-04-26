import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Exam } from '../interface/exam';

@Component({
  selector: 'app-list-exams',
  templateUrl: './list-exams.component.html',
  styleUrls: ['./list-exams.component.css']
})
export class ListExamsComponent implements OnInit {
   exams:Exam[]
   role:number
  constructor(private http:Http) {
    this.exams=[]
   }

  ngOnInit() {
    this.loadData()
  }
  loadData(){
    this.http.get('api/subjects/1').subscribe(res=>{
      console.log(res)
      this.role = JSON.parse(localStorage.getItem('user')).role
      let val = res.json()
      if(val.success==true){
        this.exams=val.data
      }
    })
  }
  delete(x:any){
    confirm(`Bạn chắc chắn xóa bài thi ${x.name} chứ ?`)
    this.http.delete(`api/exams/${x.id}`).subscribe(res=>{
      console.log(res)
    })
  }
}
