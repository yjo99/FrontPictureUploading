export class User{

    userName:String="";
    email:String = "";
    address:String = "";
    password:String = "";

    constructor(userName:String,email:String,address:String,password:String){

        this.userName = userName;
        this.email = email;
        this.address = address;
        this.password = password;

    }
}