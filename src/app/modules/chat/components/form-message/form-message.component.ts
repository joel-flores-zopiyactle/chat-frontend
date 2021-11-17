import { SocketChatService } from './../../services/socket-chat.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent implements OnInit {

  @Input() userId :string= '';
  private userReceivedId:String = "";
  message = new FormControl('');
  eventName:string  = 'messages-iVentas'

  constructor(private chatService:ChatService, private socketService:SocketChatService) { }

  ngOnInit(): void {
    //console.log("Usuario id desde el form", this.userId);

  }

  sendMessage() {
    let message = {
      'mensaje': this.message.value,
      'usuario_id': this.userId,
      'recibido_id': "61906decbccf0805633517ae",//this.userReceivedId,
    }
    // console.log(message);

    this.socketService.sendMessage(message);

    this.message = new FormControl('');
  }

}
