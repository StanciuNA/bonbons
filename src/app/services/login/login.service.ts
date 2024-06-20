import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user = new BehaviorSubject<string>("My Account");

  constructor(private http: HttpClient, private router : Router) { }

  url = "http://localhost:3000/auth"

  login(email : any, password : any): Observable<any>{
    const users = this.http.get(this.url).subscribe((data : any) =>{
      for (let user of data){
        if (user.email == email && user.password == password){
          this.user.next(email);
          this.router.navigate([""]);
        }
      }
    });
    return this.user.asObservable()

  }

  isAuthenticated(){
    return this.user.asObservable();
  }
}
