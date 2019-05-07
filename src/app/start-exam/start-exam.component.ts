import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AccessToken } from '../interface/Login';
import { Exam } from '../interface/exam';
import { ExamService } from '../service/exam.service';


@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  show: boolean
  exam: Exam
  constructor(private http: Http,private examService:ExamService) {
    this.show = false

  }

  ngOnInit() {
  }
  start() {
 
this.examService.getExam(1).then(val=>{
  if (val.success == true) {
    this.exam = val.data.exam
    this.exam.task_id =val.data.task_id
    console.log(this.exam)

    this.show = true
}
})
    


  }
  updateAnswer(question_id,answer_id,stask_id){
    console.log(question_id,answer_id)
    let url ='/api/tasks/'+this.exam.task_id
    this.http.put(url,{question_id,answer_id}).subscribe(res=>{
      console.log(res)
    })

  }
  onSubmit(){
    this.http.delete("/api/tasks/"+this.exam.task_id).subscribe(res=>{
     confirm("Nộp bài thành công ")
    })
  }
}
