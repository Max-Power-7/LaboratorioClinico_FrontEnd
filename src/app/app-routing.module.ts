import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';
import { ListarOrdenComponent } from './components/listar-orden/listar-orden.component';
import { LaboratoristaComponent } from './components/laboratorista/laboratorista.component';
import { ServiciosSaludComponent } from './components/servicios-salud/servicios-salud.component';

import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { CommonModule } from '@angular/common';
import { ExamenComponent } from './components/examen/examen.component';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';
import { OrdenServicioComponent } from './components/orden-servicio/orden-servicio.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { PacienteCrearComponent } from './components/paciente-crear/paciente-crear.component';
import { PacienteListarComponent } from './components/paciente-listar/paciente-listar.component';
import { EditarExamenComponent } from './editar-examen/editar-examen.component';

const routes: Routes = [

  // { path: 'listar-paciente', component: ListarPacienteComponent },
  { path: 'orden', component: ListarOrdenComponent },
  { path: 'crear-orden', component: CrearOrdenComponent },
  // { path: 'crear-paciente', component: CrearPacienteComponent },
  // { path: 'editar-paciente/:id', component: CrearPacienteComponent },
  { path: 'laboratorista', component: LaboratoristaComponent },
  { path: 'servicios', component: ServiciosSaludComponent },
  { path: 'examen', component: ExamenComponent },
  { path: 'crear-examen', component: CrearExamenComponent },
  { path: 'orden-servicio', component: OrdenServicioComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'paciente', component: PacienteListarComponent },
  { path: 'paciente-crear', component: PacienteCrearComponent },
  { path: 'paciente-editar/:id', component: PacienteCrearComponent },
  { path: 'editar-examen', component: EditarExamenComponent },
  { path: '**', component: NotFound404Component },
  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule { }
