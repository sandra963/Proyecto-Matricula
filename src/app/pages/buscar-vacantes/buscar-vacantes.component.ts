import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecaptchaErrorParameters } from 'ng-recaptcha';
import { VacantesService } from 'src/app/services/vacantes.service';


@Component({
  
  selector: 'app-buscar-vacantes',
  templateUrl: './buscar-vacantes.component.html',
  styleUrls: ['./buscar-vacantes.component.css']
})
export class BuscarVacantesComponent implements OnInit {
  provincia:string='Provincia';
  distrito:string='Distrito';
  nivel:string='';
  Grado:string='';

   vacantes:any=[];
  
  public resolved(captchaResponse: string): void {
    console.log(`Captcha resuelto: ${captchaResponse}`);
    
    // Funcionó
   }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    console.log(`Captcha error: ${errorDetails}`);
    // Falló
  }
//Presione Mayús + Tabulación para navegar por el historial de chat.

  constructor( private readonly ps:VacantesService,
              private ar: ActivatedRoute) { }
    _getVacantes() {  
      this.ps._getVacantes().subscribe((rest: any) => {
      this.vacantes = rest.data;
      console.log(this.vacantes);
      })
    }

    ngOnInit(): void {
      this._getVacantes();
    }
  
 }

 

