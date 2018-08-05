import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-ejng-pipes',
  templateUrl: './ejng-pipes.component.html',
  styleUrls: ['./ejng-pipes.component.css']
})
export class EjngPipesComponent implements OnInit {
  pesos:number = 100;
  sexo:string = "mujer";
  nombre:string = "Dora"
  encabezamiento:any = { hombre: "Sr.", mujer: "Sra." }
  constructor() { }

  ngOnInit() {
  }

}
