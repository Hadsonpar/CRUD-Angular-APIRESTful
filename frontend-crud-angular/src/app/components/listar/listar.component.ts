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
    this.listAsig();
  }

  listAsig()
  {
    this.asignaturaService.getAsignatura().subscribe(
      res=>{
        this.list=res;
        console.log(res);
      },
      err=>console.log(err)
    );
  }

  deleteAsig(id:string){
    this.asignaturaService.deleteAsignatura(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }
}
