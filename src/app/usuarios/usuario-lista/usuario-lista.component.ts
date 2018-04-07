import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'pr2-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private _usuariosService: UsuariosService) { }

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this._usuariosService.getUsuarios()
    .subscribe( data => {
      this.usuarios = data;
    });
  }

  eliminarItem(usuario) {
    this._usuariosService.deleteUsuario(usuario);
  }

}
