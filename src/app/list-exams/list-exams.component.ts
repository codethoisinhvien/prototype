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
   maxsize =7
   cpage=1
  constructor(private http:Http,private examService:ExamService) {
    this.exams=[]
    this.role=JSON.parse(localStorage.getItem('user')).role
   }

  ngOnInit() {
    this.loadData()
  }
  loadData(){
    this.examService.getListEXam(1,this.cpage).then(val=>{
       
      if(val.success==true){
        this.exams=val.data

        if(this.exams.length>=6&&this.cpage>this.maxsize/6)
        this.maxsize+=6
        console.log(this.exams)

      }
    })
     
  }
  delete(x:any){
    this.examService.deleteExam(x).then(res=>{
      console.log(res)
    })
  }
  loadPage(){
    console.log(this.cpage)
    this.loadData()
   
  }
}
