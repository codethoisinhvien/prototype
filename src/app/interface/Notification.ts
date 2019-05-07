export interface Notification{
    id?:number
    content?:string;
    condition?:{
        role?:number,
        user_id?:number
    }
}