import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../dto/request/LoginDto';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../../dto/response/ResponseDto';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../dto/request/User';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  token:String = "";
  routeMessage:String = "";
  loginFG!: FormGroup;

  emailvalid:number = 1
 passwordvalid:number = 1


  constructor(private http:HttpClient, private fb:FormBuilder){


  }
  ngOnInit(): void {
    // this.loginFG = this.fb.group({
    //   email:["",[Validators.required, Validators.email,Validators.maxLength(15)]],
    //   password: ["",[Validators.required]]
    // })
    this.loginFG = new FormGroup({
     email : new FormControl("" , [Validators.required, Validators.email]),
     password: new FormControl("",[Validators.required,Validators.minLength(3)])
    })
  }

  get email() : FormControl{
    return this.loginFG.get('email') as FormControl;
  }

  get password() : FormControl{
    return this.loginFG.get('password') as FormControl;
  }




  login(){
    
    console.log(this.loginFG.controls['email'])

    this.http.post<ResponseDto>("http://localhost:8080/auth/login", new LoginDto(this.email.value, this.password.value)).subscribe(
      response => {
        if(response.status){
          this.token = response.data;
          alert(response.message)
          alert("the token is" +this.token)
        }else{
          alert(response.message)
        }
      }
      
    );
  }
}
