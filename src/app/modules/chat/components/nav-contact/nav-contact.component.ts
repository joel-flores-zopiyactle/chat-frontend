import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-contact',
  templateUrl: './nav-contact.component.html',
  styleUrls: ['./nav-contact.component.css']
})
export class NavContactComponent implements OnInit {

  activeModal:Boolean = false;
  @Input() userId:string = "";

  contacto:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getDataContactoID(this.userId).subscribe( data => {
      //console.log(data[0].contacto_id);
      this.userService.getDataUserID(data[0].contacto_id).subscribe(result => {
        console.log(result);
        this.contacto = result;

      })

    })
  }

  toggleModal(ventana:any) {
    this.activeModal = ventana;
  }

}
