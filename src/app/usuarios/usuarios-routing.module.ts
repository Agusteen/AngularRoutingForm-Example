import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';

const routes: Routes = [
  {
    path: '', 
    component: UsuarioListaComponent
  },
  {
    path: 'usuarios/nuevoUsuario',
    component: UsuarioRegistroComponent,
    pathMatch: 'full'
  }
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
