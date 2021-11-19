// Constantes estáticas => Variable estática de sólo lectura
//

class Persona {
  static contadorPersonas = 0;

  //Creamos un método estático para acceder a la constante estática, pero no vamos a poder modificar el valor. Debido a que es la llamada a un método estático y no a una variable
  // Esto va a simular una constante del máximo de objetos que podemos crear de objetos tipo persona.
  static get MAX_OBJ(){
    // 5 objetos ya sean de la clase padre o de la clase hija
    return 5;
  }


  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    // Si queremos controlar el número de objetos, lo podemos hacer de la siguiente manera
    if (Persona.contadorPersonas < Persona.MAX_OBJ) {
      this.idPersona = ++Persona.contadorPersonas;
    } else {
      console.log('Se ha superado el máximo de objetos permitidos');
    }
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

// Como definimos que es un método get, automáticamente nos retorna el valor
console.log( Persona.MAX_OBJ); // 5
// Si tratamos de llamar un método set, no va a surgir ningún efecto debido a que sólo definimos un método get y no un método set
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ); // 5

// Control de personas
let persona3 = new Persona('Mariano', 'Lara');
let persona4 = new Persona('Santiago', 'Toledo');
let persona5 = new Persona('Lola', 'Toro');
// Aquí la consola retorna => Se ha superado el máximo de objetos permitidos 
console.log(persona5.toString()); // undefined Lola Toro // Esto debido a que el id no fue asignado
