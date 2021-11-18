import { UserService } from './../../services/user.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent implements OnInit {

  @Output() ventana = new EventEmitter<boolean>();
  @Input() userID:string = "";
  contacto!:Contacto;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getDataContactoID(this.userID).subscribe( data => {
      let contacto_id = data.contacto_id;
      this.userService.getDataContact(contacto_id).subscribe(result => {

        this.contacto = result;

      })

    })
  }

  cerrarVentana() {
    this.ventana.emit(false)
  }

}
