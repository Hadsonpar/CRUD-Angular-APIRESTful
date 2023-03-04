import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura, AsignaturaService } from 'src/app/services/asignatura.service';

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

  ngOnInit(): void {
    this.cod = this.activateRouter.snapshot.params.cod;
    this.asignaturaService.getIdAsignatura(this.cod).subscribe(
      res=>{this.editAsignatura=res},
      err=>console.log(err)            
    );
    console.log(this.cod);
  }

  editAsig(){
    this.asignaturaService.editAsignatura(this.cod, this.editAsignatura).subscribe(
      res=>{        
        this.router.navigate(['/list']);
      },
      err=>console.log(err)
    )
  }
}
