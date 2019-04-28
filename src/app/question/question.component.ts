import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { Question, Answer } from '../interface/exam';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question:Question
  @Output()  public passEntry
  constructor(private activeModal: NgbActiveModal) { 
    this.question={answers:[]}
    this.passEntry=new EventEmitter<Question>()
  }

  ngOnInit() {
    let b:any =this.question.answers.forEach(item=>{
      let val :any = item;
      item.right= val.question_answer.right
    });
    

  }
  addAnswer(){
    let b :Answer={
      right:false}
    this.question.answers.push(b)
    
   
  }
  addQuestion() {
    
    this.passEntry.emit(this.question);
    this.activeModal.close()
  }
  deleteAnswer(i){
   this.question.answers.splice(i, 1)
  }
  
  
}
