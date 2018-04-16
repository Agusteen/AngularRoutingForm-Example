import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../usuarios.model';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pr2-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.scss'],
  providers: [NgbDatepickerConfig]
})
export class UsuarioRegistroComponent implements OnInit {

  usuarioForm: FormGroup;
  usuarioNuevo: Usuario;

  constructor(private formBuilder: FormBuilder, private _usuariosService: UsuariosService, private router: Router, config: NgbDatepickerConfig) {
    this.inicializarForm();

    let currentTime = new Date()
    let month = currentTime.getMonth() + 1
    let day = currentTime.getDate()
    let year = currentTime.getFullYear()
    config.maxDate = { year: year, month: month, day: day-1 };
    config.outsideDays = 'hidden';
  }

  ngOnInit() {

  }

  inicializarForm() {
    this.usuarioForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('[ñA-Za-z ]+')]],
      apellido: ['', [Validators.required, Validators.pattern('[ñA-Za-z ]+')]],
      dni: ['', [Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(7), Validators.maxLength(8)]],
      mail: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  guardar(form) {
    if (form.valid) {
      let date: Date = new Date(form.controls.date.value.year, form.controls.date.value.month - 1, form.controls.date.value.day)

      this.usuarioNuevo = new Usuario(form.controls.nombre.value, form.controls.apellido.value, form.controls.dni.value, form.controls.mail.value, date, form.controls.phone.value, form.controls.address.value);

      this._usuariosService.addUsuario(this.usuarioNuevo);

      this.usuarioForm.reset();
      this.router.navigate(['./usuarios']);

      alert("El usuario se registró correctamente");
    } else {
      alert("Ups! No se puedo registrar el usuario");
    }
  }

}
