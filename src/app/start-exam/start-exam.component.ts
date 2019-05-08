import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AccessToken } from '../interface/Login';
import { Exam } from '../interface/exam';
import { ExamService } from '../service/exam.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css'],
  providers: [NgbTimepickerConfig]
})
export class StartExamComponent implements OnInit {
  show: boolean
  exam: Exam
  time: NgbTimeStruct;
  show2: boolean
  clockTime:any;
  constructor( private examService: ExamService, private activatedRoute: ActivatedRoute, config: NgbTimepickerConfig,private router:Router) {
    this.show = false

    this.exam = {}
    config.seconds = true;
    config.spinners = false;
    this.time = { hour: 0, minute: 0, second: 0 }
  }

  ngOnInit() {
    this.loadData()

  }
  loadData() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);

      this.exam.name = params['title'];
      this.exam.score = params['score'];
      this.exam.timedo = params['timedo']
    });
    this.activatedRoute.params.subscribe(res => {
      this.exam.id = res.id
    })
  }
  start() {


    this.examService.getExam(this.exam.id).then(val => {
      if (val.success == true) {
        this.exam = val.data.exam

        this.exam.task_id = val.data.task_id
        console.log(this.exam)

        this.show = true

        this.clock(this.exam.timedo)
      }
    })



  }
  updateAnswer(question_id, answer_id) {
    console.log(question_id, answer_id)
    this.examService.updateAnswer(question_id, answer_id, this.exam.task_id).then(res => {
      console.log(res)
    })

  }
  onSubmit() {
    clearInterval(this.clockTime);
    this.examService.submitExam(this.exam.task_id).then(val=>{
      if(val.success){
        confirm("Số điểm của bạn đạt được là "+val.score+"điểm")
      }
     
    })
    this.router.navigate(['history/'+this.exam.task_id])
  }
  clock(time: number) {
    let start = new Date()
    let stop: Date = new Date(start.getTime() + time * 60 * 1000);
    let b = time * 60;
    this.clockTime = setInterval(() => {
      b--;
      if (b > 0) {
        stop.setTime(stop.getTime() - 1000)

        let life = new Date(stop.getTime() - start.getTime())
        this.time.hour = life.getHours() - 8
        this.time.minute = life.getMinutes();
        this.time.second = life.getSeconds();
        this.show2 = this.show2 == true ? false : true
        console.log(this.time.second)
      } else {
        clearInterval(this.clockTime)
      }
    }, 1000)
  }
}
