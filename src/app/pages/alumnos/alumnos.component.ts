import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
dnialumno:string='';
nombre:string='';
apellido:string='';
apoderado:string='';
telefono:string='';
correo:string='';
direccion:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
