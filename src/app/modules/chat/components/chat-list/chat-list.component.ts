import { Directive, Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  //@ViewChild('scroll', {static: true}) scrollBar:ElementRef;

  @Input() userID:string = "";
  @Input() imagenUser:string = "";

  imagenContacto:string = "";

  constructor() { }

  ngAfterViewInit() {
    this.scrollBar();
  }


  ngOnInit(): void {
    this.scrollBar();
  }

  scrollBar() {
    const element:any = document.getElementById('scroll');
    // console.log(element.scrollHeight);
    element.scrollTop = element.scrollHeight
  }






  //TODO : Revisar el scrolll top

  getImagen(imagen:string) {
    this.imagenContacto = imagen;
  }
}
