import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url_user :string =    "https://api-chat-ventas.herokuapp.com/api/auth/user";
  private url_contact :string = "https://api-chat-ventas.herokuapp.com/api/user/contact";

  //private url_user :string =    "http://localhost:3000/api/auth/user";
  //private url_contact :string = "http://localhost:3000/api/user/contact";

  constructor(private http:HttpClient) { }

  //Obtengo los datos del usuario
  getDataUserID(id:string):Observable<Usuario> {
      return this.http.get<Usuario>(`${this.url_user}/${id}`);
  }

  //OBtengo los datos del contacto para el chat
  getDataContact(id:string):Observable<Contacto> {
    return this.http.get<Contacto>(`${this.url_user}/contact/${id}`);
  }

  // Obtengo los datos del contacto que le pertenece al usuario
  getDataContactoID(id:string):Observable<any> {
    return this.http.get(`${this.url_contact}/${id}`);
  }
}
