import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlumnosComponent } from "./pages/alumnos/alumnos.component";
import { BuscarVacantesComponent } from "./pages/buscar-vacantes/buscar-vacantes.component";
import { ContactenosComponent } from "./pages/contactenos/contactenos.component";
import { InfGeneralComponent } from "./pages/inf-general/inf-general.component";
import { MatriculaEnLineaConfirmacionComponent } from "./pages/matricula-en-linea-confirmacion/matricula-en-linea-confirmacion.component";
import { MatriculaEnLineaComponent } from "./pages/matricula-en-linea/matricula-en-linea.component";



const routes: Routes=[
 {path:'infGeneral', component:InfGeneralComponent},
 {path:'MatriculaEnLinea', component:MatriculaEnLineaComponent},
 {path:'MatriculaEnLineaConfirmacion', component:MatriculaEnLineaConfirmacionComponent},
 {path:'BuscarVacantes', component:BuscarVacantesComponent},
 {path:'alumnos', component:AlumnosComponent},
 {path:'contactenos', component:ContactenosComponent},
 {path: '', redirectTo: 'infGeneral', pathMatch: 'full' }
 
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}