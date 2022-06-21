import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component';
import { ListarOrdenComponent } from './components/listar-orden/listar-orden.component';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    CrearPacienteComponent,
    ListarPacienteComponent,
    ListarOrdenComponent,
    CrearOrdenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
