export interface Exam{
    id?:number ,
    name?: string,
    score?: number,
    subject_id?:number
    timedo?:number
    task_id?:number
    questions?:Question[]
}
export interface Answer{
    id?:number
    content?:string
}
export interface Question{
    id?:number
    content?:string
    answers?:Answer[]
} 

