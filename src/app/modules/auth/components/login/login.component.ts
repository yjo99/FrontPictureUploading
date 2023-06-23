import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../dto/request/LoginDto';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../../dto/response/ResponseDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  token:String = "";
  routeMessage:String = "";
  


  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    
  }



  login(email:String, password:String){


    this.http.post<ResponseDto>("http://localhost:8080/auth/login", new LoginDto(email,password)).subscribe(
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
