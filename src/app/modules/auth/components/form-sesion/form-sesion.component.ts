import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-sesion',
  templateUrl: './form-sesion.component.html',
  styleUrls: ['./form-sesion.component.css']
})
export class FormSesionComponent implements OnInit {

  singInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.singInForm.value);
    this.authService.singIn(this.singInForm.value).subscribe( (data:any) => {
      console.log(data);
      let id_user = data.data._id;
      this.router.navigate(['/chat', id_user]);

    }, (err) => {
      console.log(err.error);

    })
  }
}
