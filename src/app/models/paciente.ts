export class Paciente{
    _id?: number;
    carnet: string;
    nombre: string;
    paterno: string;
    materno: string;
    fechanacimiento: string;
    edad: string;
    sexo: string;
    direccion: string;

    constructor(carnet: string, nombre: string, paterno: string, materno:string, fechanacimiento:string, edad: string,sexo:string,direccion:string){
        this.carnet= carnet;
        this.nombre = nombre;
        this.paterno = paterno;
        this.materno= materno;
        this.fechanacimiento = fechanacimiento;
        this.edad = edad;
        this.sexo = sexo;
        this.direccion = direccion;
    }
}