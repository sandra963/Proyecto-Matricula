import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-vacantes',
  templateUrl: './buscar-vacantes.component.html',
  styleUrls: ['./buscar-vacantes.component.css']
})
export class BuscarVacantesComponent implements OnInit {
  provincia:string='Lima'
  distrito:string='Lima';
  nivel:string='';
  Grado:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
