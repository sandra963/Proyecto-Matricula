import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlumnosComponent } from "./pages/alumnos/alumnos.component";
import { BuscarVacantesComponent } from "./pages/buscar-vacantes/buscar-vacantes.component";
import { InfGeneralComponent } from "./pages/inf-general/inf-general.component";


const routes: Routes=[
 {path:'infGeneral', component:InfGeneralComponent },
 {path:'BuscarVacantes', component:BuscarVacantesComponent},
 {path:'alumnos', component:AlumnosComponent},
 {path: '', redirectTo: 'infGeneral', pathMatch: 'full' }
 
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}