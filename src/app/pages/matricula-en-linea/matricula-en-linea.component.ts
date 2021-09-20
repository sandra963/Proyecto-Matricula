import { Component, OnInit } from '@angular/core';
import { ConsultaDNIService } from 'src/app/services/consulta-dni.service';

@Component({
  selector: 'app-matricula-en-linea',
  templateUrl: './matricula-en-linea.component.html',
  styleUrls: ['./matricula-en-linea.component.css']
})
export class MatriculaEnLineaComponent implements OnInit {

  documentos = [];

  constructor(private readonly ConsultaDNI: ConsultaDNIService) { }

  __getDNI(){
    this.ConsultaDNI.__getDNI().subscribe((rest: any) => {
      console.log(rest.data);
      this.documentos = rest.data;
      
    })
  }

  ngOnInit(): void {
    this.__getDNI();
  }

}
