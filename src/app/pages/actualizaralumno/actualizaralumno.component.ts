import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumnos/model.alumno';

@Component({
  selector: 'app-actualizaralumno',
  templateUrl: './actualizaralumno.component.html',
  styleUrls: ['./actualizaralumno.component.css']
  
})
export class ActualizaralumnoComponent implements OnInit {
  alumnosArray: Alumno[]=[
    {dnialumno:45454556, nombres:"Maria", apellidos:"Rojas Salvador", nivel:"Primaria", grado:"Primero", domicilio:"Av. Juan Vela 1234", telefono:"900000"},
    {dnialumno:7890663, nombres:"Ana Brenda", apellidos:"Herrera Joquin", nivel:"Secundaria", grado:"Segundo", domicilio:"Av. Benavides 0321", telefono:"900000"},
    {dnialumno:7778899, nombres:"Rosa", apellidos:"Perez Alejo", nivel:"Primaria", grado:"Tercero", domicilio:"Av. Bedoya 4594", telefono:"9111111"},
  ];
  selectedAlumno:Alumno=new Alumno();
  openForEdit(alumno: Alumno){
    this.selectedAlumno=alumno;
  }


  addorEdit(){
    if(this.selectedAlumno.dnialumno===0){
      this.selectedAlumno.dnialumno=this.alumnosArray.length +1;
      this.alumnosArray.push(this.selectedAlumno);
      
    }
    this.selectedAlumno= new Alumno();
  }
  constructor() { }

  ngOnInit(): void {
  }
 
}
