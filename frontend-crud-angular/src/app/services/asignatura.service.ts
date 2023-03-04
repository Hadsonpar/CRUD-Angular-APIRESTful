import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  url = 'http://localhost:8085/api/asignatura';
  constructor(private http: HttpClient) { }

  getAsignatura(): Observable<any>{
    return this.http.get(this.url);
  }

  getIdAsignatura(id: string): Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  saveAsignatura(asignatura: Asignatura):Observable<any>
  {
    return this.http.post(this.url, asignatura);
  }

  editAsignatura(id: string, asignatura: Asignatura):Observable<any>{
    return this.http.put(this.url+'/'+id, asignatura)
  }

  deleteAsignatura(id: string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}

export interface Asignatura{
  codigo:string;
  nombre:string;
  creditos:string;
  duracion: string;
  contenido:string;
  costo:string;
}
