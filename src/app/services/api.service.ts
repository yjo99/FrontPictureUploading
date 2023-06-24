import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseDto } from '../modules/auth/dto/response/ResponseDto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }

   post(url:String, data:any) : Observable<any>{
    return this.http.post<ResponseDto>(`${environment.api}${url}`,data)
   }
}
