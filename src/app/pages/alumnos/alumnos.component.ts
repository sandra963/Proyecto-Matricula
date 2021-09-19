import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Alumno } from './model.alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnosForm =this.fb.group({
  dnialumno:[''],
  nombre:[''],
  apellidos:[''],
  grado:[''],
  nivel:[''],
  apoderado:[''],
  telefono:[''],
  correo:[''],
  direccion:[''],
  })

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
delete(){
if(confirm("Estas seguro de querer eliminar")){
  this.alumnosArray=this.alumnosArray.filter(x=>x !=this.selectedAlumno);
  this.selectedAlumno=new Alumno();
}
}

  constructor(private fb:FormBuilder) { }
    __onSubmit(){
    if(this.alumnosForm.value.dnialumno){
     console.log(this.alumnosForm.value.dnialumno);
     alert('Resultado');
    }
    else{
     alert('Ingrese por lo menos un dato!!')
    }
  }

  ngOnInit(): void {
  }

}
