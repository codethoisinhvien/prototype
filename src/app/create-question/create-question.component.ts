import { Component, OnInit } from '@angular/core';
import { Exam, Question } from '../interface/exam';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionComponent } from '../question/question.component';
import { AccessToken } from '../interface/Login';
import { ListQuestionComponent } from '../list-question/list-question.component';
import { ExamService } from '../service/exam.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  exam: Exam
  modalRef: any
  constructor(private examService :  ExamService, private http:Http, private router: ActivatedRoute, private modalService: NgbModal) {
    this.exam = {

      questions: []
    }
    this.loadData()
  }

  ngOnInit() {

  }
   loadData() {
    this.router.params.subscribe(params => {
      this.exam.id = params['id']
      let access_token: AccessToken = {}
      access_token = JSON.parse(localStorage.getItem('user'))
      let myheaders: Headers = new Headers()
      myheaders.append('Authorization', access_token.access_token)
      let options = new RequestOptions({ headers: myheaders })
      this.http.get(`api/exams/${this.exam.id}`, options).subscribe(res => {
        let val = res.json();
        console.log(res)
        if (val.success) {
          this.exam = val.exam
        
          
          
           
        }

      })
    })

  }
  addQuestion() {
    let a = {
      content: "",
      answers: []
    }
    this.exam.questions.push(a)

  }
  updateQuestion(i) {

    this.modalRef = this.modalService.open(QuestionComponent);
    this.modalRef.componentInstance.question = this.exam.questions[i]
    this.modalRef.componentInstance.passEntry.subscribe(($e) => {
    
      let question: Question = {};
      question = $e
      question.subject_id = this.exam.subject_id
      this.examService.updateQuestion(question).then(res=>{
        console.log(res)
         this.loadData()
      })
    //  this.http.put(`api/questions/${question.id}`,question).subscribe(res=>{
    //   let val = res.json()
    //   if (val.success == true) {
  
    
       
    //   }
    //  })
    
    console.log($e)
    })


    
  }
  open() {
    this.modalRef = this.modalService.open(QuestionComponent);
    // modalRef.componentInstance.name = 1;
    this.modalRef.componentInstance.passEntry.subscribe(($e) => {
    
      let question: Question = {};
      question = $e
      question.subject_id = this.exam.subject_id
      if(question.id==undefined){
      this.http.post(`api/questions`, question).subscribe(res => {
        console.log(res)
        let val = res.json();
        if (val.success == true) {
          let question_id = val.question.id
          question.id = question_id
          this.http.put(`api/exams/${this.exam.id}?action=add`, { question_id, score: 1 }).subscribe(res => {
            let val = res.json()
            if (val.success == true) {

              this.loadData()
            }
          })
        }
      })
    }
    console.log($e)
    })


  }
  deleteQuestion(i){
    let question_id = this.exam.questions[i].id
          
          this.http.put(`api/exams/${this.exam.id}?action=delete`, { question_id}).subscribe(res => {
        let val = res.json()
            if (val.success == true) {

              this.loadData()
            }
          })

  }
  openBank(){
    this.modalRef = this.modalService.open(ListQuestionComponent,{ size: 'lg' });
    // modalRef.componentInstance.name = 1;
    this.modalRef.componentInstance.exam = this.exam;
    this.modalRef.componentInstance.passEntry.subscribe(($e)=>{
      this.loadData()
     
    })
  }
}
