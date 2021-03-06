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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes de Jean Paul
import { ServiciosSaludComponent } from './components/servicios-salud/servicios-salud.component';
import { LaboratoristaComponent } from './components/laboratorista/laboratorista.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';

import { OrdenServicioComponent } from './components/orden-servicio/orden-servicio.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ExamenComponent } from './components/examen/examen.component';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';

//Componente Luis
import { PacienteCrearComponent } from './components/paciente-crear/paciente-crear.component';
import { PacienteListarComponent } from './components/paciente-listar/paciente-listar.component';
import { EditarExamenComponent } from './editar-examen/editar-examen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    ListarOrdenComponent,
    CrearOrdenComponent,
    ServiciosSaludComponent,
    LaboratoristaComponent,
    OrdenServicioComponent,
    NotFound404Component,
    InformacionComponent,
    ExamenComponent,
    CrearExamenComponent,
    PacienteCrearComponent,
    PacienteListarComponent,
    EditarExamenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
