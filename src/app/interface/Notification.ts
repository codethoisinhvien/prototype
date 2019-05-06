export interface Notification{
    content?:string;
    condition?:{
        role?:number,
        user_id?:number
    }
}