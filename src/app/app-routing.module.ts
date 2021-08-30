import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuscarVacantesComponent } from "./pages/buscar-vacantes/buscar-vacantes.component";

import { InfGeneralComponent } from "./pages/inf-general/inf-general.component";


const routes: Routes=[
 {path:'infGeneral', component:InfGeneralComponent },
 {path:'BuscarVacantes', component:BuscarVacantesComponent},
 {path: '', redirectTo: 'infGeneral', pathMatch: 'full' }
 
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}