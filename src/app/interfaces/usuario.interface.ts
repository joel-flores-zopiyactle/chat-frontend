export interface Usuario {
  apellidoPat: string;
  apellidoMat: string;
  telefono:    number;
  usuario:     Datos;
}

export interface Datos {
  _id:    string;
  nombre: string;
  imagen: string;
}
