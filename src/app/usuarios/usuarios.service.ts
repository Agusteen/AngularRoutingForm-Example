import { Injectable } from '@angular/core';
import { Usuario } from './usuarios.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export const USUARIOS_DATA: Usuario[] = [
  new Usuario('Agustin', 'Muñoz Campos', 37347617, 'agustin.munoz@incluit.com'),
  new Usuario('Victor', 'Ruiz', 30677450, 'victor.rz@gmail.com'),
  new Usuario('Nina', 'Kraviz', 17443671, 'ninakraviz@gmail.com')
];

@Injectable()
export class UsuariosService {
  

  constructor() { }

  addUsuario(usuarioNuevo: Usuario) {
    USUARIOS_DATA.push(usuarioNuevo);
  }

  getUsuarios(): Observable<Usuario[]> {
    return Observable.create((observer: Observer<Usuario[]>) => {
      observer.next(USUARIOS_DATA);
    });
  }

  deleteUsuario(usuario: Usuario) {
    let index = USUARIOS_DATA.indexOf(usuario);
    USUARIOS_DATA.splice(index, 1);
  }

}

