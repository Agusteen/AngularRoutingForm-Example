import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../usuarios.model';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pr2-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.scss']
})
export class UsuarioRegistroComponent implements OnInit {

  usuarioForm: FormGroup;
  usuarioNuevo: Usuario;

  constructor(private formBuilder: FormBuilder, private _usuariosService: UsuariosService, private router: Router) {
    this.inicializarForm();
  }

  ngOnInit() {
    
  }

  inicializarForm() {
    this.usuarioForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('[ñA-Za-z ]+')]],
      apellido: ['', [Validators.required, Validators.pattern('[ñA-Za-z ]+')]],
      dni: ['', [Validators.required, Validators.pattern("[0-9]+")]],
      mail: ['', [Validators.required, Validators.email]]
    });
  }

  guardar(form) { 
    if(form.valid) {
      this.usuarioNuevo = new Usuario(form.controls.nombre.value, form.controls.apellido.value, form.controls.dni.value, form.controls.mail.value);

      this._usuariosService.addUsuario(this.usuarioNuevo);

      this.usuarioForm.reset();
      this.router.navigate(['./usuarios']);
      
      alert("El usuario se registró correctamente");
    } else {
      alert("Ups! No se puedo registrar el usuario");
    }
  }

}
