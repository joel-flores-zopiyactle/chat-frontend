import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent implements OnInit {

  @Output() ventana = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  cerrarVentana() {
    this.ventana.emit(false);
  }

}
