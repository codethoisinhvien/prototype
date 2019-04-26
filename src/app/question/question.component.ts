import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Question, Answer } from '../interface/exam';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question:Question
  @Output()  public passEntry
  constructor() { 
    this.question={answers:[]}
    this.passEntry=new EventEmitter<Question>()
  }

  ngOnInit() {
  }
  addAnswer(){
    let b :Answer={}
    this.question.answers.push(b)
   
  }
  passBack() {
    this.passEntry.emit(this.question);
    }

  
}
