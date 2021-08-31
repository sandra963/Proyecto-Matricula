import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inf-general',
  templateUrl: './inf-general.component.html',
  styleUrls: ['./inf-general.component.css']
})
export class InfGeneralComponent implements OnInit {
  general={
    titulo: 'Empieza tu matricula',
    subtitulopregunta1:'¿Como Funciona?',
    subtitulopregunta2:'¿Cuales son los requisitos?',
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}
