import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura, AsignaturaService } from 'src/app/services/asignatura.service';

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

  addAsig(){
    this.asignaturaService.saveAsignatura(this.addAsignatura).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/list']);
      },
      err=>console.log(err)
    )
  }
/*
  selected:any;
  filtered :any;
  credits = [
            { creditsName: "Crédito", creditsCod: "1" },
            { creditsName: "Créditos", creditsCod: "2" },
            { creditsName: "Créditos", creditsCod: "3" },
            { creditsName: "Créditos", creditsCod: "4" },
            { creditsName: "Créditos", creditsCod: "5" }
  ];    
 
    onOptionsSelectedCredits() {
      console.log(this.selected); 
      this.filtered = this.credits.filter(t=>t.creditsName ==this.selected);
    }
*/
}
