import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {
  @Input() userID:string = "";
  @Output() imagenUser = new EventEmitter<string>();
  user:Usuario = {
    apellidoMat: '',
    apellidoPat: '',
    telefono: 0,
    usuario : {
      nombre: '',
      imagen: '',
      _id: ''

    }
  };
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getDataUserID(this.userID).subscribe(result => {
      //console.log(result);
      this.user = result;
      this.imagenUser.emit(result.usuario.imagen)
    })
  }

}
