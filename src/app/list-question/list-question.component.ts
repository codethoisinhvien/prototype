import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exam, Question } from '../interface/exam';
import { Http } from '@angular/http';
import { ShareServiceService } from '../service/share-service.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
  @Input() exam:Exam
  @Output() passEntry=new EventEmitter<any>()
  listQuestion:Question[]
  constructor(private http:Http,private share:ShareServiceService) {}
  maxsize=1
  cpage =1
  ngOnInit() {
this.loadData(1)
  }
  loadData(i){
    this.http.get(`api/questions?page=${i}`,this.share.getHeaders()).subscribe(res=>{
      let val = res.json()
      if(val.success==true){
        this.listQuestion= val.questions
        if(this.listQuestion.length>=6&&this.cpage>this.maxsize/6)
        this.maxsize+=6
      

      }
    })
  }
  addQuestion(question_id,i){
    this.http.put(`api/exams/${this.exam.id}?action=add`, { question_id, score: 1 },this.share.getHeaders()).subscribe(res => {
      let val = res.json()
      if (val.success == true) {

        
        this.passEntry.emit(true);
       this.exam.questions.push(this.listQuestion[i]);
       this.listQuestion.splice(i,1)
      }
    })
  }
  deleteQuestion(i){
    let question_id = this.exam.questions[i].id
          
          this.http.put(`api/exams/${this.exam.id}?action=delete`, { question_id},this.share.getHeaders()).subscribe(res => {
        let val = res.json()
            if (val.success == true) {

              this.exam.questions.splice(i,1)
            }
          })
  }
  loadPage(){
    this.loadData(this.cpage)
  }

}
