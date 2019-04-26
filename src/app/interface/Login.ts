export interface Login{
    username?:string
    passwork?:string
}
export interface Access{
     success?:Boolean
     data ?:any
}
export interface AccessToken{
    access_token?:string 
    role?:number
    success?:boolean
    user?: string
}