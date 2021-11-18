import { SocketChatService } from './../../services/socket-chat.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  userID:string = "";

  constructor(
    private route:ActivatedRoute,
    private socketWeb:SocketChatService,
    private userService:UserService
    ) { }

  ngOnInit(): void {

    this.userID = this.route.snapshot.params.id;

  }

}
