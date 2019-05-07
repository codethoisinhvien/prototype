import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Exam } from '../interface/exam';
import { ExamService } from '../service/exam.service';

@Component({
  selector: 'app-list-exams',
  templateUrl: './list-exams.component.html',
  styleUrls: ['./list-exams.component.css']
})
export class ListExamsComponent implements OnInit {
   exams:Exam[]
   role:number
  constructor(private http:Http,private examService:ExamService) {
    this.exams=[]
    this.role=JSON.parse(localStorage.getItem('user')).role
   }

  ngOnInit() {
    this.loadData()
  }
  loadData(){
    this.examService.getListEXam(1).then(val=>{
       
      if(val.success==true){
        this.exams=val.data
      }
    })
     
  }
  delete(x:any){
    this.examService.deleteExam(x).then(res=>{
      console.log(res)
    })
  }
}
