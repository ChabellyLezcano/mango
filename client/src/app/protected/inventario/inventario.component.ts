import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { InventarioService } from './services/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html'
})
export class InventarioComponent {

  displayDialog = false; // provide an initializer here

  time!: Date;
  date3!: Date;
  showTime="true"


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
    codigoProducto: ['123Kjh8n', [Validators.required]],
    name: ['Guantes de látex', [Validators.required]],
    categoria: ['Material deshechable', [Validators.required]],
    marca: ['Guantex', [Validators.required]],
    descripcion: ['Guantes de látex azules talla M', [Validators.required]],
    precio: ['20', [Validators.required]],
    unidades: ['1', [Validators.required]],
    fecha: [new Date(), [Validators.required]],
  });



  constructor(
    private fb: FormBuilder,
    private router: Router,
    private inventarioService: InventarioService,
    private authService: AuthService,
  ) {}

  inventario() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);

    const { codigoProducto,
      name,
      categoria,
      marca,
      descripcion,
      precio,
      unidades,
      fecha,} = this.miFormulario.value;

    this.inventarioService.inventario(codigoProducto,
      name,
      categoria,
      marca,
      descripcion,
      precio,
      unidades,
      fecha).subscribe(
      (resp) => {
        console.log(resp);
        Swal.fire('Éxito', 'Producto añadido correctamente', 'success');
        this.router.navigateByUrl('/inventario');
        this.displayDialog = false;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', error.error.msg, 'error');
      }
    );
  }
}
