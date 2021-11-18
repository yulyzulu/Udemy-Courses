// Clases en JS

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
// Así le decimos a JS que reserve un espacio en memoria para crear un objeto de tipo Persona
// Si no se define un constructor, JS agrega uno vacío en automático
// A esto se le llama instancia de clase u objeto
let persona1 = new Persona('Juan', 'Pérez');
console.log(persona1); // Persona { nombre: 'Juan', apellido: 'Pérez' }

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2); // Persona { nombre: 'Carlos', apellido: 'Lara' }