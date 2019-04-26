import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AccessToken } from '../interface/Login';
import { Exam } from '../interface/exam';


@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  show: boolean
  exam: Exam
  constructor(private http: Http) {
    this.show = false

  }

  ngOnInit() {
  }
  start() {
    let access_token: AccessToken = {}
    access_token = JSON.parse(localStorage.getItem('user'))
    let myheaders: Headers = new Headers()
    myheaders.append('Authorization', access_token.access_token)
    let options = new RequestOptions({ headers: myheaders })
    let data = {
      exam_id: 1
    }

    this.http.post('/api/tasks', data, options).subscribe(res => {
      let val = res.json()
      if (val.success == true) {
        this.exam = val.data.exam
        this.exam.task_id =val.data.task_id
        console.log(this.exam)

        this.show = true
      }
//larman

    });


  }
  updateAnswer(question_id,answer_id){
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
