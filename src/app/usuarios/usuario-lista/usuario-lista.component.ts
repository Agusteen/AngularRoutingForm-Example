import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios.model';
import { UsuariosService } from '../usuarios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pr2-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent implements OnInit {

  usuarios: Usuario[];
  usuarioSeleccionado: Usuario;

  constructor(private _usuariosService: UsuariosService, private modalService: NgbModal) { }

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

  open(content, usuario) {
    this.usuarioSeleccionado = usuario;
     
    this.modalService.open(content).result.then((result) => {
      
    }, (reason) => {
      
    });
  }

}
