import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/models/orden';
import { CrearOrdenComponent } from '../crear-orden/crear-orden.component';

@Component({
  selector: 'app-listar-orden',
  templateUrl: './listar-orden.component.html',
  styleUrls: ['./listar-orden.component.css']
})
export class ListarOrdenComponent implements OnInit {
  ordenArray:Orden[]=[
    {id: 1, cliente: "leonel chana",edad: 23,sexo:"",ci:"897898",medico:"",red:"",establecimiento:"",municipio:"",fecha:"26/06/2022",servicio:"HEMOGRAMA COMPLETO"},
    {id: 2, cliente: "Lesly zarate",edad: 20,sexo:"",ci:"768887",medico:"",red:"",establecimiento:"",municipio:"",fecha:"26/06/2022",servicio:"HEMOGRAMA COMPLETO"},
    {id: 3, cliente: "luis beltran",edad: 25,sexo:"",ci:"667878",medico:"",red:"",establecimiento:"",municipio:"",fecha:"27/06/2022",servicio:"HEMOGRAMA COMPLETO"},
    {id: 4, cliente: "ana cristina",edad: 21,sexo:"",ci:"787766",medico:"",red:"",establecimiento:"",municipio:"",fecha:"27/06/2022",servicio:"HEMOGRAMA COMPLETO"},
    {id: 5, cliente: "jean paul",edad: 22,sexo:""   ,ci:"665696",medico:"",red:"",establecimiento:"",municipio:"",fecha:"27/06/2022",servicio:"HEMOGRAMA COMPLETO"},
  ]
 
  constructor() { }

  ngOnInit(): void {
  }

}
