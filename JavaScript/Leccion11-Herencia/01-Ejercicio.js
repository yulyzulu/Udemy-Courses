// Clase Persona
class Persona {

  static contadorPersonas = 0;

  constructor(nombre, apellido, edad){
    this._idPersona = ++Persona.contadorPersonas;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  get idPersona() {
    return this._idPersona;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  get edad() {
    return this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }
  toString() {
    return `${this._idPersona} ${this._nombre} ${this._apellido}, ${this._edad} años`;
  }
}

// Clase Empleado hereda de la clase Persona
class Empleado extends Persona{

  static contadorEmpleados = 0;

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._idEmpleado = ++Empleado.contadorEmpleados;
    this._sueldo = sueldo;
  }
  get idEmpleado() {
    return this._idEmpleado;
  }
  get sueldo() {
    return this._sueldo;
  }
  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  toString() {
    return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
  }
}

// Clase Cliente
class Cliente extends Persona {

  static contadorClientes = 0;

  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._idCliente = ++Cliente.contadorClientes;
    this._fechaRegistro = fechaRegistro;
  }
  get idCliente() {
    return this._idCliente;
  }
  get fechaRegistro() {
    return this._fechaRegistro;
  }
  set fechaRegistro(fechaRegistro){
    this._fechaRegistro = fechaRegistro;
  }

  toString() {
    return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
  }
}

// Prueba clase persona
let persona1 = new Persona('Juan', 'Pérez', 34);
console.log(persona1.toString()); // 1 Juan Pérez, 34 años

let persona2 =  new Persona('Carlos', 'Lara', 25);
console.log(persona2.toString()); // 2 Carlos Lara, 25 años

let empleado1 = new Empleado('Luis', 'Ramírez', '35', 5000);
console.log(empleado1.toString()); // 3 Luis Ramírez, 35 años  1 4000000

let empleado2 = new Empleado('Laura', 'Quintero', 26, 6000);
console.log(empleado2.toString()); //4 Laura Quintero, 26 años 2 6000

let cliente1 = new Cliente('Miguel', 'Cervantes', 40, new Date());
console.log(cliente1.toString()); // 5 Miguel Cervantes, 40 años 1 Thu Nov 18 2021 10:47:27 GMT-0500

let cliente2 = new Cliente('Karla', 'Quintero', 32, new Date());
console.log(cliente2.toString()); // 6 Karla Quintero, 32 años 2 Thu Nov 18 2021 10:46:25 GMT-0500