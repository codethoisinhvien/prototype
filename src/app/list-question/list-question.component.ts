import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exam, Question } from '../interface/exam';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
  @Input() exam:Exam
  @Output() passEntry=new EventEmitter<any>()
  listQuestion:Question[]
  constructor(private http:Http) {}

  ngOnInit() {
this.loadData()
  }
  loadData(){
    this.http.get(`api/questions`).subscribe(res=>{
      let val = res.json()
      if(val.success==true){
        this.listQuestion= val.questions
      }
    })
  }
  addQuestion(question_id,i){
    this.http.put(`api/exams/${this.exam.id}?action=add`, { question_id, score: 1 }).subscribe(res => {
      let val = res.json()
      if (val.success == true) {

        
        this.passEntry.emit(true);
       this.exam.questions.push(this.listQuestion[i]);
       this.listQuestion.splice(i,1)
      }
    })
  }

}
