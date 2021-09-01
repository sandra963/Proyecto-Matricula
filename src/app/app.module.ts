import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InfGeneralComponent } from './pages/inf-general/inf-general.component';
import { MatriculaEnLineaComponent } from './pages/matricula-en-linea/matricula-en-linea.component';
import { MatriculaEnLineaConfirmacionComponent } from './pages/matricula-en-linea-confirmacion/matricula-en-linea-confirmacion.component';
import { BuscarVacantesComponent } from './pages/buscar-vacantes/buscar-vacantes.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InfGeneralComponent,
    MatriculaEnLineaComponent,
    MatriculaEnLineaConfirmacionComponent,
    BuscarVacantesComponent,
    AlumnosComponent,
    ContactenosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
