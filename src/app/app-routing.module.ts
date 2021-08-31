import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactenosComponent } from "./pages/contactenos/contactenos.component";

import { InfGeneralComponent } from "./pages/inf-general/inf-general.component";
import { MatriculaEnLineaComponent } from "./pages/matricula-en-linea/matricula-en-linea.component";


const routes: Routes=[
 {path:'infGeneral', component:InfGeneralComponent},
 {path:'MatriculaEnLinea', component:MatriculaEnLineaComponent},
 {path:'contactenos', component:ContactenosComponent},
 {path: '', redirectTo: 'infGeneral', pathMatch: 'full' }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}