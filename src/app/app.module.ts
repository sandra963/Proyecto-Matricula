import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InfGeneralComponent } from './pages/inf-general/inf-general.component';
import { MatriculaEnLineaComponent } from './pages/matricula-en-linea/matricula-en-linea.component';
import { MatriculaEnLineaConfirmacionComponent } from './pages/matricula-en-linea-confirmacion/matricula-en-linea-confirmacion.component';
import { MatriculaEnLineaConsultaComponent } from './pages/matricula-en-linea-consulta/matricula-en-linea-consulta.component';


@NgModule({
  declarations: [
    AppComponent,
    InfGeneralComponent,
    MatriculaEnLineaComponent,
    MatriculaEnLineaConfirmacionComponent,
    MatriculaEnLineaConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
