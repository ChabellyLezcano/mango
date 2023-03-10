import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PacientesService } from './services/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html'
})
export class PacientesComponent implements OnInit{
  displayDialog = false; // provide an initializer here
  get usuario() {
    return this.authService.usuario
  }

  miFormulario: FormGroup = this.fb.group({
    name: ['Hola', [Validators.required]],
    apellidos: ['28938', [Validators.required]],
    telefono_movil: ['Hola', [Validators.required]],
    email: ['Hola@gmail.com', [Validators.required, Validators.email]],
    dni: ['Hola', [Validators.required]],
    direccion: ['Hola', [Validators.required]],
    cp: ['28993', [Validators.required]],
    municipio: ['Homa', [Validators.required]],
    provincia: ['Hola', [Validators.required]]
  });

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private pacientesService: PacientesService) {}


  ngOnInit() {}

  showModalDialog() {
    this.displayDialog= true;
}

onHideDialog() {
  this.displayDialog = false;
}
}