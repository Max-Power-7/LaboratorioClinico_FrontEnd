
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';
import { ListarOrdenComponent } from './components/listar-orden/listar-orden.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ListarPacienteComponent} from './components/listar-paciente/listar-paciente.component'
import { LaboratoristaComponent } from './components/laboratorista/laboratorista.component';
import { ServiciosSaludComponent } from './components/servicios-salud/servicios-salud.component';

import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent} from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { CommonModule } from '@angular/common';
import { ExamenComponent } from './components/examen/examen.component';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';

const routes: Routes = [

    {path: 'listar-paciente', component:ListarPacienteComponent},
    {path: 'orden', component: ListarOrdenComponent },
    {path: 'crear-orden', component: CrearOrdenComponent },
    {path: 'crear-paciente', component:CrearPacienteComponent},
    {path: 'editar-paciente/:id', component:CrearPacienteComponent},
    {path: 'laboratorista', component: LaboratoristaComponent },
    {path: 'servicios', component: ServiciosSaludComponent },
    {path: 'examen', component: ExamenComponent },
    {path: 'crear-examen', component: CrearExamenComponent },
    
    //{path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
    declarations:[],
    imports: [CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule],

})

export class AppRoutingModule{}
