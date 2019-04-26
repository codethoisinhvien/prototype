import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-information-task',
  templateUrl: './information-task.component.html',
  styleUrls: ['./information-task.component.css']
})
export class InformationTaskComponent implements OnInit {
   exam:any
  constructor(private http:Http) { }

  ngOnInit() {
    this.loadData()
  }
loadData(){
  this.http.get('/api/tasks/1').subscribe(res=>{
    this.exam = res.json()
    
  })
}
}
