import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from '../model/asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  /* invocar la url del servicio construido en Spring Boot */
  url = 'http://localhost:8085/api/asignatura';
  constructor(private http: HttpClient) { }

  /* método para listar todos los registros de la asignatura */
  getAsignatura(): Observable<any>{
    return this.http.get(this.url);
  }

  /* método para buscar los registros según el id de la asignatura */
  getIdAsignatura(id: string): Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  /* método para guardar los registros de la asignatura */
  saveAsignatura(asignatura: Asignatura):Observable<any>
  {
    return this.http.post(this.url, asignatura);
  }

  /* método para actualizar los registros según el id de la asignatura */
  editAsignatura(id: string, asignatura: Asignatura):Observable<any>{
    return this.http.put(this.url+'/'+id, asignatura)
  }
  /* método para eliminar los registros según el id de la asignatura */
  deleteAsignatura(id: string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}