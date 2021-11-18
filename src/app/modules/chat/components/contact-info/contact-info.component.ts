import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { Contacto } from 'src/app/interfaces/contacto.interface';
@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  @Input() userID:string = "";

  contacto!:Contacto;
  mostrarDatos:boolean = false;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    //console.log(this.userID);

    this.userService.getDataContactoID(this.userID).subscribe( data => {
      let contacto_id = data.contacto_id;
      this.userService.getDataContact(contacto_id).subscribe(result => {

        this.contacto = result;

      })

    })
  }

  mostrarDatosContacto() {
    this.mostrarDatos = !this.mostrarDatos;
  }

}
