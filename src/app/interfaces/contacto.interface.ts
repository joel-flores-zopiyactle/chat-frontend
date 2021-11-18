export interface Contacto {
  _id:         string;
  apellidoPat: string;
  apellidoMat: string;
  telefono:    number;
  edad:        number;
  prioridad:   string;
  problema:    string;
  curp:        string;
  usuario:     Datos;
  createdAt:   Date;
  updatedAt:   Date;
}

export interface Datos {
  nombre:    string;
  imagen:    string;
  correo:    string
}
