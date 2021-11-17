import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Socket } from "ngx-socket-io";


@Injectable({
  providedIn: 'root'
})
export class SocketChatService extends Socket {

  callbak: EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient) {
    super({
      url: 'http://localhost:3000/',
      /* options: {
        query: {
          nameUser: 'joel'
        }
      } */
    })

    this.ioSocket.on('chat', (res:any) => this.callbak.emit(res) );
  }

  sendMessage(msg: any) {
    this.ioSocket.emit('chat', msg);
  }
}
