import { Message } from './../../../interfaces/message.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private URL_CHAT:String = "http://localhost:3000/api/chat/";

  constructor(private http:HttpClient) { }

  sendMessage(data:any):Observable<any> {
    return this.http.post(`${this.URL_CHAT}/send`, data);
  }

  getAllMessagesSends():Observable<any> {
    return this.http.get<any>(`${this.URL_CHAT}/messages`);
  }

  getContactInfo(id:string):Observable<any> {
    return this.http.get(`${this.URL_CHAT}/contact/${id}`);
  }


}
