import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/auth"

  login(email : any, password : any): Observable<any>{
    const users = this.http.get(this.url);
    return users;
  }
}
