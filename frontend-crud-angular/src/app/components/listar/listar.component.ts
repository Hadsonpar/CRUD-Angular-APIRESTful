import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  list:any=[];  
  constructor(private asignaturaService: AsignaturaService) { }

  ngOnInit(): void {
    this.listAsig();/* Iniciar cargando la lista asignatura */
  }

  /* Método para listar los registros */  
  listAsig()
  {
    /* Referenciar al método getAsignatura() del servicio asignatura */
    this.asignaturaService.getAsignatura().subscribe(
      res=>{
        this.list=res;
        console.log(res);
      },
      err=>console.log(err)
    );
  }

  /* Método para eliminar el registro según el id de la asignatura */
  deleteAsig(id:string){    
    /* Referenciar al método deleteAsignatura() del servicio asignatura */
    this.asignaturaService.deleteAsignatura(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }  
}