import{NgModule} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';


import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ListarPacienteComponent} from './components/listar-paciente/listar-paciente.component'

import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainHeaderComponent} from './components/main-header/main-header.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [

    {path: '', component:ListarPacienteComponent},
    {path:'crear-paciente', component:CrearPacienteComponent},
    {path:'editar-paciente/:id', component:CrearPacienteComponent},
    {path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    imports: [CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}