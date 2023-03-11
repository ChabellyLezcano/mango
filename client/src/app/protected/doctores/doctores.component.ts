import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { DoctoresService } from './services/doctores.service';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
})
export class DoctoresComponent {
  displayDialog = false; // provide an initializer here

  showModalDialog() {
    this.displayDialog = true;
  }

  onHideDialog() {
    this.displayDialog = false;
  }
  get usuario() {
    const usr = this.authService.usuario;
    return usr;
  }

  miFormulario: FormGroup = this.fb.group({
    name: ['Bernardo', [Validators.required]],
    apellidos: ['Sánchez Vallejo', [Validators.required]],
    email: ['bernardo@gmail.com', [Validators.required]],
    numColegiado: ['28009319', [Validators.required]],
    telefono_movil: ['657894833', [Validators.required]],
    especialidad: ['Ortodoncia', [Validators.required]],
    dni: ['50509023-B', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private doctoresService: DoctoresService,
    private authService: AuthService
  ) {}

  doctor() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);

    const {
      name,
      apellidos,
      email,
      numColegiado,
      telefono_movil,
      especialidad,
      dni
    } = this.miFormulario.value;

    this.doctoresService
      .doctor(
        name,
        apellidos,
        email,
        numColegiado,
        telefono_movil,
        especialidad,
        dni
      )
      .subscribe(
        (resp) => {
          console.log(resp);
          Swal.fire('Éxito', 'Doctor creado correctamente', 'success');
          this.router.navigateByUrl('/doctores');
          this.displayDialog = false;
        },
        (error) => {
          console.log(error);
          Swal.fire('Error', error.error.msg, 'error');
        }
      );
  }
}
