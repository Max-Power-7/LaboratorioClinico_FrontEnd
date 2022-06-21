import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {
    
  pacienteForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService ) { 
    this.pacienteForm = this.fb.group({
      carnet:['', Validators.required],
      nombre:['', Validators.required],
      paterno:['', Validators.required],
      materno:['', Validators.required],
      fechanacimiento:['', Validators.required],
      edad:['', Validators.required],
      sexo:['', Validators.required],
      direccion:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarPaciente(){
    console.log(this.pacienteForm)

    console.log(this.pacienteForm.get('paciente')?.value);

    const PACIENTE: Paciente ={
      carnet: this.pacienteForm.get('carnet')?.value,
      nombre: this.pacienteForm.get('nombre')?.value,
      paterno: this.pacienteForm.get('paterno')?.value,
      materno: this.pacienteForm.get('materno')?.value,
      fechanacimiento: this.pacienteForm.get('fechanacimiento')?.value,
      edad: this.pacienteForm.get('edad')?.value,
      sexo: this.pacienteForm.get('sexo')?.value,
      direccion: this.pacienteForm.get('direccion')?.value,
      
    }

    console.log(PACIENTE);
    this.toastr.success('El paciente fue registrado exitosamente!', 'Paciente registrado!');
    this.router.navigate(['/listar-paciente']);

  }

}
