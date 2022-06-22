import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {
    
  pacienteForm: FormGroup;
  titulo = 'Crear Paciente';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _pacienteService: PacienteService,
              private aRouter: ActivatedRoute
              ) { 
              
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
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
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

    if(this.id !== null){
      // editar paciente
      this._pacienteService.editarPaciente(this.id, PACIENTE).subscribe(data=>{
        this.toastr.success('El paciente fue editado exitosamente!', 'Paciente actualizado!');
        this.router.navigate(['/listar-paciente']);
      }, error=>{
        console.log(error);
        this.pacienteForm.reset();
      })


    } else{
      // guardar paciente
      console.log(PACIENTE);
      this._pacienteService.guardarPaciente(PACIENTE).subscribe(data=>{
  
        this.toastr.success('El paciente fue registrado exitosamente!', 'Paciente registrado!');
        this.router.navigate(['/listar-paciente']);
      }, error=>{
        console.log(error);
        this.pacienteForm.reset();
      })
      
    }

   
    

  }

  esEditar(){
    if(this.id !== null){
      this.titulo ='Editar Paciente';
      this._pacienteService.obtenerPaciente(this.id).subscribe(data=>{
        this.pacienteForm.setValue({
          carnet: data.carnet,
          nombre: data.nombre,
          paterno: data.paterno,
          materno: data.materno,
          fechanacimiento: data.fechanacimiento,
          edad: data.edad,
          sexo: data.sexo,
          direccion: data.direccion,
        })
      })
    }
  }

}
