import { SocketChatService } from './../../services/socket-chat.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';

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

  constructor(private usuarioService:UserService, private socketService:SocketChatService) { }

  ngOnInit(): void {
    //console.log("Usuario id desde el form", this.userId);
    this.usuarioService.getDataContactoID(this.userId).subscribe( data => {
      this.userReceivedId = data.contacto_id;
    })

  }

  sendMessage() {
    let message = {
      'mensaje': this.message.value,
      'usuario_id': this.userId,
      'recibido_id': this.userReceivedId,
    }
    // console.log(message);

    this.socketService.sendMessage(message);

    this.message = new FormControl('');
  }

}
