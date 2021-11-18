// Cuando trabajamos con clases, no se aplica el concepto de Hoisting
// Eso quiere decir que primero tenemos que definir nuestra clase para poderla utilizar. En cambio cuando trabajamos con funciones, podemos primero mandar a llamar la función y posteriormente definirla


// No aplica el concepto de hoisting
//let persona1 = new Persona('Juan', 'Perez'); // Cannot access 'Persona' before initialization

class Persona {
  constructor(nombre, apellido){
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre(){
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
}

let persona1 = new Persona('Juan', 'Perez');
persona1.nombre = 'Juan Carlos'; // set nombre ('Juan Carlos');
console.log(persona1.nombre); // Juan Carlos

