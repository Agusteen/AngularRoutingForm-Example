import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';
import { DniFormatPipe } from './pipes/dni-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UsuarioRegistroComponent, UsuarioListaComponent, DniFormatPipe],
  exports: [UsuarioRegistroComponent, UsuarioListaComponent],
  providers: [UsuariosService]
})
export class UsuariosModule { }
