import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Asignatura } from 'src/app/model/asignatura';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  cod:string="";
  editAsignatura: Asignatura={codigo:'',nombre:'',creditos:'',duracion:'',contenido:'',costo:''};
  constructor(
    private asignaturaService: AsignaturaService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  /* Iniciar cargando para listar los valores según el id asignatura */
  ngOnInit(): void {
    this.cod = this.activateRouter.snapshot.params.cod;
     /* invocar el método para listar los registro según el id de la asignatura */
    this.asignaturaService.getIdAsignatura(this.cod).subscribe(
      res=>{this.editAsignatura=res},
      err=>console.log(err)            
    );
    console.log(this.cod);
  }

  /* método para editar o actualizar los registros según el id de la asignatura */
  editAsig(){
    /* invocar el método para editar los registro según el id de la asignatura */
    this.asignaturaService.editAsignatura(this.cod, this.editAsignatura).subscribe(
      res=>{  
        /* direccionar a la vista list */      
        this.router.navigate(['/list']);
      },
      err=>console.log(err)
    )
  }
}