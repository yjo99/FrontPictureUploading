import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from '../../dto/response/ResponseDto';
import { User } from '../../dto/request/User';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupFG!:FormGroup;
  resMessage:String = '';

  constructor(private http:HttpClient,private router: Router,private apiService:ApiService){
    
  }

  ngOnInit(): void {
    this.signupFG = new FormGroup({
      userName: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
      email: new FormControl("", [Validators.required, Validators.email,]),
      address: new FormControl(""),
      password: new FormControl("", [Validators.required,Validators.minLength(3),Validators.maxLength(30)])
    });
  
  }

  get userName() : FormControl{
    return this.signupFG.get("userName") as FormControl;
  }
  get email() : FormControl{
    return this.signupFG.get('email') as FormControl;
  }
  get address() : FormControl{
    return this.signupFG.get('address') as FormControl;
  }
  get password(): FormControl{
    return this.signupFG.get('password') as FormControl;
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

  signup(){

    this.apiService.post("/auth/signup",new User(this.userName.value,this.email.value,this.address.value,this.password.value)).subscribe(
      response =>{
        if(response.status){
          this.resMessage = response.message;

          this.wait(10000 * 10)
          this.goToLoginComponent()
        }else{
          alert(response.message)
        }
      }
    );

  }

}
