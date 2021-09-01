import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfGeneralComponent } from './pages/inf-general/inf-general.component';
import { MatriculaEnLineaComponent } from './pages/matricula-en-linea/matricula-en-linea.component';
import { MatriculaEnLineaConfirmacionComponent } from './pages/matricula-en-linea-confirmacion/matricula-en-linea-confirmacion.component';
import { BuscarVacantesComponent } from './pages/buscar-vacantes/buscar-vacantes.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { ActualizaralumnoComponent } from './pages/actualizaralumno/actualizaralumno.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { MatriculaEnLineaConsultaComponent } from './pages/matricula-en-linea-consulta/matricula-en-linea-consulta.component';



@NgModule({
  declarations: [
    AppComponent,
    InfGeneralComponent,
    MatriculaEnLineaComponent,
    MatriculaEnLineaConfirmacionComponent,
    BuscarVacantesComponent,
    AlumnosComponent,
    ActualizaralumnoComponent,
    LoginComponent,
    ContactenosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
