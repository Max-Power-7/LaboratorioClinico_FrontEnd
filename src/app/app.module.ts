import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

import { ListarOrdenComponent } from './components/listar-orden/listar-orden.component';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';
import { AppRoutingModule } from './app-routing.module';

import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes de Jean Paul
import { ServiciosSaludComponent } from './components/servicios-salud/servicios-salud.component';
import { LaboratoristaComponent } from './components/laboratorista/laboratorista.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';

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
    CrearOrdenComponent,
    ServiciosSaludComponent,
    LaboratoristaComponent,
    NotFound404Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
