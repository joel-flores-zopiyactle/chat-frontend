import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  @Input() userID:string = "";

  contacto:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    console.log(this.userID);

    this.userService.getDataContactoID(this.userID).subscribe( data => {
      //console.log(data[0].contacto_id);
      this.userService.getDataUserID(data[0].contacto_id).subscribe(result => {
        console.log(result);
        this.contacto = result;

      })

    })

  }

}
