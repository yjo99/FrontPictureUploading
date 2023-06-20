import { Component } from '@angular/core';
import { LoginDto } from '../../dto/request/LoginDto';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDto: LoginDto = new LoginDto;



  printLoginDto(email:String, password:String){
    this.loginDto.email = email;
    this.loginDto.password = password;
    console.log("email: ",email , "password: ",password);
  }
}
