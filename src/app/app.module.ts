import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { AppRoutingModule } from './app-routing.module';

// Componentes de Leonel
import { ListarOrdenComponent } from './components/listar-orden/listar-orden.component';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';

// Componentes de Jean Paul
import { ServiciosSaludComponent } from './components/servicios-salud/servicios-salud.component';
import { LaboratoristaComponent } from './components/laboratorista/laboratorista.component';
import { OrdenServicioComponent } from './components/orden-servicio/orden-servicio.component';

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
    OrdenServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
