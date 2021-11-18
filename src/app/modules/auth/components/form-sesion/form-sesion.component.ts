import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-sesion',
  templateUrl: './form-sesion.component.html',
  styleUrls: ['./form-sesion.component.css']
})
export class FormSesionComponent implements OnInit {

  singInForm = new FormGroup({
    email: new FormControl('', Validators.required ),
    password: new FormControl('', Validators.required )
  })

  mensaje:string = "";

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.singInForm.valid) {
      this.authService.singIn(this.singInForm.value).subscribe( (data:any) => {
        if(data) {
          let id_user = data.data._id;
          this.router.navigate(['/chat', id_user]);
          this.mensaje = "";
        }
        // Si no hay resulatdos mostramos mensaje de error
        this.mensaje = "Los datos son incorrectos";

      }, (err) => {
        console.log(err.error);
      })
    } else {
      this.mensaje = "Los campos son obliglatorios";
    }




  }
}
