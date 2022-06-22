import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit {
  listPaciente: Paciente[]=[];

  constructor(private _pacienteService: PacienteService,
      private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.obtenerPaciente();
  }

  obtenerPaciente(){
    this._pacienteService.getPaciente().subscribe(data=>{
      console.log(data);
      this.listPaciente=data;
    }, error => {
      console.log(error);
    })
  }

  eliminarPaciente(id: any){
    this._pacienteService.eliminarPaciente(id).subscribe(data=>{
    this.toastr.error('El paciennte fue eliminado con exito', 'Paciente eliminado');
    this.obtenerPaciente();
  }, error => {
    console.log(error);
  })
  }

}
