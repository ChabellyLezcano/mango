import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  perfil(
    direccion: string,
    telefono_movil: string,
    telefono_fijo: string,
    cp: string,
    nif: string,
    municipio: string,
    provincia: string,
    //usuario: Object // change type to any to accept object with _id field
  ) {
  
    const url = `${this.baseUrl}/perfil/addPerfil`;
    const body = {direccion, telefono_movil, telefono_fijo, municipio, provincia, cp, nif}// usuario}
  
  
    return this.http.post<any>(url, body) // change return type to any
  }
}
