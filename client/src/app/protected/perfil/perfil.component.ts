import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { PerfilService } from './services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})


export class PerfilComponent {

  get usuario() {
    const usr = this.authService.usuario
    return usr;
  }


  miFormulario: FormGroup = this.fb.group({
    direccion: ['Hola', [Validators.required]],
    cp: ['28938', [Validators.required]],
    telefono_movil: ['Hola', [Validators.required]],
    telefono_fijo: ['Hola', [Validators.required]],
    nif: ['Hola', [Validators.required]],
    municipio: ['Homa', [Validators.required]],
    provincia: ['Hola', [Validators.required]]
  });

  

  constructor(private fb: FormBuilder, private router: Router, private perfilService: PerfilService, private authService: AuthService) {}


  perfil(){
    console.log(this.miFormulario.value)
    console.log(this.miFormulario.valid)
  
    const { direccion, cp, telefono_fijo, telefono_movil, nif, municipio, provincia } = this.miFormulario.value;
  
    //const usuario = { _id: this.usuario.uid, email: this.usuario.email, name: this.usuario.name }; // add _id field to user object
  
    this.perfilService.perfil(direccion, cp, telefono_fijo, telefono_movil, nif, municipio, provincia) //usuario)
    .subscribe( resp => {
      this.router.navigateByUrl('/dashboard');
    })
    
  
    //this.router.navigateByUrl('/dashboard')
  }

}
