import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  @ViewChild('scroll') scrollBar: ElementRef;

  @Input() userID:string = "";

  constructor() {
    this.scrollBar = new ElementRef(this);
  }

  ngOnInit(): void {
    this.scrollChatBotton();
  }


  //TODO : Revisar el scrolll top
  scrollChatBotton() {
   // this.scrollBar.nativeElement.scrollTop = this.scrollBar.nativeElement.scrollHeight
  }
}
