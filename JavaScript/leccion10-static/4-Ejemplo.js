
class Persona {
  static contadorPersonas = 0;

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    // Por cada objeto que creemos tipoPersona vamos asignando un nuevo identificador único
    this.idPersona = ++Persona.contadorPersonas;
  }
  get nombre(){
    return this._nombre;
  }
  set nombre(nombre){
    this._nombre = nombre;
  }
  get apellido(){
    return this._apellido;
  }
  set apellido(apellido){
    this._apellido = apellido;
  }
  nombreCompleto(){
    return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
  }

  toString(){
    return this.nombreCompleto();
  }
  static saludar() {
    console.log('Saludos desde método static');
  }
  static saludar2(persona) {
    console.log(persona.nombre + ' ' + persona.apellido);
  }
}

class Empleado extends Persona{
  constructor(nombre, apellido, departamento){
    super(nombre, apellido);
    this._departamento = departamento;
  }
  get departamento(){
    return this._departamento;
  }
  set departamento(departamento){
    this._departamento = departamento;
  }
  nombreCompleto(){
    return super.nombreCompleto() + ', ' + this._departamento;
  }
}

let persona1 = new Persona('Juan', 'Pérez'); // Persona { _nombre: 'Juan', _apellido: 'Pérez' }
console.log(persona1.toString()); // 1 Juan Pérez
let empleado1 = new Empleado('Carlos', 'Lara', 'Ventas'); // Empleado { _nombre: 'Carlos', _apellido: 'Lara', _departamento: 'Ventas' }
console.log(empleado1.toString()); // 2 Carlos Lara, Ventas

console.log(Persona.contadorPersonas); // 2;

let persona2 = new Persona('Karla', 'Ramírez');
console.log(persona2.toString()); // 3 Karla Ramírez
console.log(Persona.contadorPersonas); // 3