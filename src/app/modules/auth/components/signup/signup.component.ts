import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from '../../dto/response/ResponseDto';
import { User } from '../../dto/request/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  ngOnInit(): void {
    console.log("Hello login")
  }
  constructor(private http:HttpClient,private router: Router){
    console.log("Hellllllllo")
  }

  goToLoginComponent(): void {
    this.router.navigate(['/login']);
  }

  wait(timeInMilliseconds: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }

  signup(userName:String, email:String, address:String, password:String){

    this.http.post<ResponseDto>("http://localhost:8080/auth/signup",new User(userName,email,address,password)).subscribe(
      response =>{
        if(response.status){
          alert(response.message)

          this.wait(5000)
          this.goToLoginComponent()
        }else{
          alert(response.message)
        }
      }
    );

  }

}
