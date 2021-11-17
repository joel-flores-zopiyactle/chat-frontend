import { SocketChatService } from './../../services/socket-chat.service';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  userID:string = "";

  constructor(private route:ActivatedRoute, private socketWeb:SocketChatService) { }

  ngOnInit(): void {

    this.userID = this.route.snapshot.params.id;
    console.log(this.userID);
  }

}
