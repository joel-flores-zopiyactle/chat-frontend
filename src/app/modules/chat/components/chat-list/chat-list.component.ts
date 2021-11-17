import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from './../../services/chat.service';
import { Component, EventEmitter, OnInit, Output, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  @Input() userID:string = "";

    constructor() { }

  ngOnInit(): void {
    scroll();
  }

  scroll() {
    const scroll = document.getElementById('scroll')
    scroll?.scroll({
      top: 0
    })
  }

  //TODO : Revisar el scrolll top











}
