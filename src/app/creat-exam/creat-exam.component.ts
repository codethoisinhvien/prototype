import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Exam } from '../interface/exam';
import { Http } from '@angular/http';

@Component({
  selector: 'app-creat-exam',
  templateUrl: './creat-exam.component.html',
  styleUrls: ['./creat-exam.component.css']
})
export class CreatExamComponent  {
  @Input() name;
  exam:Exam
  constructor(public modal: NgbActiveModal,private http:Http) {
    this.exam={}
   }
   save(){
     console.log(this.exam)
     this.exam.subject_id= this.name
     this.http.post('api/exams',this.exam).subscribe(res=>{
  
     })
   }


}
