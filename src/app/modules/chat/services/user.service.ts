import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url_user :string =    "http://localhost:3000/api/auth/user";
  private url_contact :string = "http://localhost:3000/api/user/contact";

  constructor(private http:HttpClient) { }

  getDataUserID(id:string):Observable<any> {
      return this.http.get(`${this.url_user}/${id}`);
  }

  getDataContactoID(id:string):Observable<any> {
    return this.http.get(`${this.url_contact}/${id}`);
  }
}
