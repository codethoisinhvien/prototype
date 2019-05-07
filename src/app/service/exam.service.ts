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
  submitExam() {

  }
  updateAnswer(question_id,answer_id,task_id): Promise<any>{
    
    return this.http.put(`/api/tasks/${task_id}`,{question_id,answer_id})
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
}
