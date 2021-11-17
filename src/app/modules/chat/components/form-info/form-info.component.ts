import { UserService } from './../../services/user.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent implements OnInit {

  @Output() ventana = new EventEmitter<boolean>();
  @Input() userID:string = "";
  contacto:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getDataContactoID(this.userID).subscribe( data => {
      //console.log(data[0].contacto_id);
      this.userService.getDataUserID(data[0].contacto_id).subscribe(result => {
        console.log(result);
        this.contacto = result;

      })

    })
  }

  cerrarVentana() {
    this.ventana.emit(false)
  }

}
