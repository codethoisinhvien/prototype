import { Component, OnInit } from '@angular/core';
import { Exam } from '../interface/exam';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  exam:Exam
  
  constructor(private http:Http,private router:ActivatedRoute,private modalService: NgbModal) {
    this.exam={

      questions:[]}
    this.loadData()
   }

  ngOnInit() {
   
  }
 async loadData(){
  this.router.params.subscribe(params => {
   this.exam.id=params['id']
   this.http.get(`api/exams/${this.exam.id}`).subscribe(res=>{
    let val = res.json();
    console.log(res)
    if(val.success){
      this.exam= val.exam
    }

  })
  })
  
 }
addQuestion(){
  let a ={
    content:"",
    answers:[]
  }
 this.exam.questions.push(a)
  
}
addAnswer(i){
  let b ={
    content:"",
  }
  this.exam.questions[i].answers.push(b)
  console.log(this.exam.questions)
}
open() {
  const modalRef = this.modalService.open(QuestionComponent);
 // modalRef.componentInstance.name = 1;
  modalRef.componentInstance.passEntry.subscribe(($e)=>{
    console.log($e);   

    
    this.exam.questions.push($e)
})

  
}

}
