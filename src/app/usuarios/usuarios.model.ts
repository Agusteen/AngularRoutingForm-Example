export class Usuario {

    nombre: string;
    apellido: string;
    dni: number;
    mail: string;
    fecha: Date;
    telefono: string;
    direccion: string;    

    constructor(nombre: string, apellido: string, dni: number, mail: string, fecha: Date, telefono: string, direccion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.mail = mail;
        this.fecha = fecha;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}