import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {
  heros:string[]=["Hemograma","Hemograma Completo","Hemoglobina","examen"];
  
  constructor() { }

  ngOnInit(): void {
 
  }

}


