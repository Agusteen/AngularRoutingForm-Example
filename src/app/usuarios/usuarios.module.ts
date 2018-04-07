import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [UsuarioRegistroComponent, UsuarioListaComponent],
  exports: [UsuarioRegistroComponent, UsuarioListaComponent]
})
export class UsuariosModule { }
