import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {
pacientes:Array<any>=[{id:1,nombre:"leonel",paterno:"chana",ci:"98"},
{id:2,nombre:"miguel",paterno:"guardia",ci:"99"},
{id:3,nombre:"lesly",paterno:"zarate",ci:"100"},];  
  
  heros:Array<any>=[
  {id:1,nombre:"Citograma nasal",tipo:"HEMATOLOGIA"},
  {id:2,nombre:"Hemograma Completo",tipo:"HEMATOLOGIA"},
  {id:3,nombre:"Hemoglobina y hematocrito",tipo:"HEMATOLOGIA"},
  {id:4,nombre:"Leucograma",tipo:"HEMATOLOGIA"},
  {id:5,nombre:"Estudio morfológico en médula ósea",tipo:"HEMATOLOGIA"},
  {id:6,nombre:"Leucograma",tipo:"HEMATOLOGIA"},
  {id:7,nombre:"Hemoglobina y hematocrito",tipo:"HEMATOLOGIA"},
  {id:8,nombre:"Recuento de reticulocitos",tipo:"HEMATOLOGIA"},

  {id:9,nombre:"Baciloscopía (incluye 2 tomas, tinción y lectura)",tipo:"BACTERIOLOGÍA"},
  {id:10,nombre:"Coprocultivo",tipo:"BACTERIOLOGÍA"},
  {id:11,nombre:"Cultivo para tuberculosis",tipo:"BACTERIOLOGÍA"},
  {id:12,nombre:"Frotis tinción Ghram",tipo:"BACTERIOLOGÍA"},
  {id:13,nombre:"Diagnóstico de Bordetella",tipo:"BACTERIOLOGÍA"},
  {id:14,nombre:"Cultivo para gérmenes comunes y antibiograma",tipo:"BACTERIOLOGÍA"},
  {id:15,nombre:"Cultivo para tuberculosis",tipo:"BACTERIOLOGÍA"},
  {id:16,nombre:"Hemocultivo y pruebas complementarias",tipo:"BACTERIOLOGÍA"}];
  
  
  
  constructor() { }

  ngOnInit(): void {
 
  }

}


