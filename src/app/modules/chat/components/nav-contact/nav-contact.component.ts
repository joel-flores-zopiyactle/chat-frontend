import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';

@Component({
  selector: 'app-nav-contact',
  templateUrl: './nav-contact.component.html',
  styleUrls: ['./nav-contact.component.css']
})
export class NavContactComponent implements OnInit {

  activeModal:Boolean = false;
  @Input() userId:string = "";

  contacto!:Contacto;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getDataContactoID(this.userId).subscribe( data => {
      let contacto_id = data.contacto_id;
      this.userService.getDataContact(contacto_id).subscribe(result => {

        this.contacto = result;

      })
    })
  }

  toggleModal(ventana:any) {
    this.activeModal = ventana;
  }

}
