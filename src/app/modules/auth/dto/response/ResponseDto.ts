export class ResponseDto {

    code:number=0;
    message:String='';
    data:any;
    status:boolean = false;
    date: Date = new Date(2023, 5, 23, 10, 30, 0);
    

    constructor(code:number,message:String, data:any, status:boolean, date:Date){
        this.code=code;
        this.message=message;
        this.data=data;
        this.status=status;
        this.date = date
    }


} 