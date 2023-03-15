import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from 'src/app/model/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addAsignatura: Asignatura={codigo:'',nombre:'',creditos:'',duracion:'',contenido:'',costo:''};
  constructor(private asignaturaService: AsignaturaService, private router:Router) { }

  ngOnInit(): void {
  }

  /* método para guardar los registros de la asignatura */
  addAsig(){
    /* invocar el método para guardar los registros de la asignatura */
    this.asignaturaService.saveAsignatura(this.addAsignatura).subscribe(
      res=>{
        console.log(res);
        /* direccionar a la vista list */ 
        this.router.navigate(['/list']);
      },
      err=>console.log(err)
    )
  }
}