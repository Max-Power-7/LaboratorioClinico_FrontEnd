import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListarOrdenComponent } from './components/listar-orden/listar-orden.component';
import { LaboratoristaComponent } from './components/laboratorista/laboratorista.component';
import { ServiciosSaludComponent } from './components/servicios-salud/servicios-salud.component';


const routes: Routes = [
  { path: 'laboratorista', component: LaboratoristaComponent },
  { path: 'servicios', component: ServiciosSaludComponent },
  { path: 'orden', component: ListarOrdenComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
