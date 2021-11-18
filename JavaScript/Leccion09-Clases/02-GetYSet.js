// Get y Set
// Método Get para poder leer al valor de un atributo
// Método Set para modificar el valor de ese atributo
// Sin embargo el método set no se puede llamar igual que nuestra propiedad, así que en las propiedades se acostumbra utilizar un guión bajo antes del nombre de la pripiedad

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
// A continuación se manda a llamar indirectamente el método set nombre('Juan Carlos')
persona1.nombre = 'Juan Carlos'; // set nombre ('Juan Carlos');
// A continuación se manda a llamar el método get nombre()
console.log(persona1.nombre); // Juan Carlos

