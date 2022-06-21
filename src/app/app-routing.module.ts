import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListarOrdenComponent } from './components/listar-orden/listar-orden.component';


const routes: Routes = [
  { path: 'orden', component: ListarOrdenComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
