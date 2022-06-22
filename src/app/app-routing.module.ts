import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarOrdenComponent } from './components/listar-orden/listar-orden.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component'
import { LaboratoristaComponent } from './components/laboratorista/laboratorista.component';
import { ServiciosSaludComponent } from './components/servicios-salud/servicios-salud.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';

import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [

  { path: 'listar-paciente', component: ListarPacienteComponent },
  { path: 'orden', component: ListarOrdenComponent },
  { path: 'crear-paciente', component: CrearPacienteComponent },
  { path: 'editar-paciente/:id', component: CrearPacienteComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'laboratorista', component: LaboratoristaComponent },
  { path: 'servicios', component: ServiciosSaludComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
