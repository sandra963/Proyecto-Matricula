import { Component, OnInit } from '@angular/core';
import { RecaptchaErrorParameters } from 'ng-recaptcha';

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

  public resolved(captchaResponse: string): void {
    console.log(`Captcha resuelto: ${captchaResponse}`);
    
    // Funcionó
   }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    console.log(`Captcha error: ${errorDetails}`);
    // Falló
  }
//Presione Mayús + Tabulación para navegar por el historial de chat.

  constructor() { }

  ngOnInit(): void {
  }

}
