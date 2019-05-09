import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ShareServiceService } from './share-service.service';

@Injectable()
export class ExamService {

  constructor(private http: Http, private share: ShareServiceService) { }
  getListEXam(subject_id): Promise<any> {
    return this.http.get(`api/subjects/${subject_id}`, this.share.getHeaders()).
      toPromise()
      .then(res => res.json())
      .catch(
        err => {
          console.log(err)
        }
      )

  }

  getExam(id): Promise<any> {
    let data = {
      exam_id: id
    }

    return this.http.post('/api/tasks', data, this.share.getHeaders()).toPromise()
      .then(res => res.json())
      .catch(err => {

      })
  }
  submitExam(task_id:number) :Promise<any>  {
   
      return this.http.delete(`/api/tasks/${task_id}`,this.share.getHeaders())
      .toPromise()
      .then(res=>res.json())
      .catch()
  }
  updateAnswer(question_id,answer_id,task_id): Promise<any>{
    
    return this.http.put(`/api/tasks/${task_id}`,{question_id,answer_id},this.share.getHeaders())
    .toPromise()
    .then(res => res.json())
    .catch(err => {
       
    })
  }
  deleteExam(x) :Promise<any>{
    confirm(`Bạn chắc chắn xóa bài thi ${x.name} chứ ?`)
    return this.http.delete(`api/exams/${x.id}`,this.share.getHeaders()).toPromise()
    .then(res=>res.json())
    .catch()
    
  }
  getExamResult(task_id):Promise<any>{
   return this.http.get(`/api/tasks/${task_id}`,this.share.getHeaders()).toPromise()
   .then(res=>res.json())
   .catch()
  }
  createExam(data:any){
    
  }
  updateQuestion(question):Promise<any>{
    return this.http.put(`api/questions/${question.id}`,question,this.share.getHeaders()).toPromise()
    .catch()
    .then(res=>{
      res.json()
    })
  }
  
}
