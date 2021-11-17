import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {
  @Input() userID:string = "";
  contacto:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getDataUserID(this.userID).subscribe(result => {
      console.log(result);
      this.contacto = result;
    })
  }

}
