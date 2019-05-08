import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ExamService } from '../service/exam.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-information-task',
  templateUrl: './information-task.component.html',
  styleUrls: ['./information-task.component.css']
})
export class InformationTaskComponent implements OnInit {
   exam:any
  constructor(private examService:ExamService, private activatedRoute: ActivatedRoute) {
      this.exam={}
   }

   ngOnInit() {
    this.activatedRoute.params.subscribe(res=>{
      console.log(res.id)
      this.examService.getExamResult(res.id).then(res=>{
    if(res.success==true){
      this.exam=res.data.exam
    }
        
      
      })
    })
   
  }

}
