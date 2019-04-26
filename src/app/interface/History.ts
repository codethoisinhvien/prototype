export interface History {
    id?: number,
    exam_id?: number,
   
    expiresIn?: Date,
    createdAt?:Date
    score?: number,
    exam?: {
        name?: string
        timedo?:number
       
        subject?: {
                name?: string
            }

    }
    time?:Date
 
}

export class Historys{
    id: number
    exam_id: number
   
    expiresIn: Date=new Date()
    createdAt:Date = new Date()
    score: number
    exam: {
        name: string
        timedo:number
       
        subject: {
                name: string
            }
    }
 constructor(){
     

 
 }
 cover(){
    console.log(123)
 }
   
}
