import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlAuth:string = "http://localhost:3000/api/auth";

  constructor(private http: HttpClient) { }

  singIn(user:any):Observable<any> {

    let data = {
      correo: user.email,
      password: user.password
    }

    console.log(data);


    return this.http.post(`${this.urlAuth}/singin`, data);
  }
}
