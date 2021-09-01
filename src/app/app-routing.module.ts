import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InfGeneralComponent } from "./pages/inf-general/inf-general.component";
import { MatriculaEnLineaConfirmacionComponent } from "./pages/matricula-en-linea-confirmacion/matricula-en-linea-confirmacion.component";
import { MatriculaEnLineaComponent } from "./pages/matricula-en-linea/matricula-en-linea.component";
import { MatriculaEnLineaConsultaComponent } from "./pages/matricula-en-linea-consulta/matricula-en-linea-consulta.component";
import { MatriculaSolicitudesComponent } from "./pages/matricula-solicitudes/matricula-solicitudes.component";



const routes: Routes=[
 {path:'infGeneral', component:InfGeneralComponent},
 {path:'MatriculaEnLinea', component:MatriculaEnLineaComponent},
 {path:'MatriculaEnLineaConfirmacion', component:MatriculaEnLineaConfirmacionComponent},
 {path:'MatriculaEnLineaConsulta', component:MatriculaEnLineaConsultaComponent},
 {path:'MatriculaSolicitudes', component:MatriculaSolicitudesComponent},
 {path: '', redirectTo: 'infGeneral', pathMatch: 'full' }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}