// Función constructor de objetos de tipo persona
// Para modificar todos los objetos, cambiamos es el método constructor y así podemos acceder desde todos los objetos a este nuevo atributo o método
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function() {
    return this.nombre + ' ' + this.apellido;
  }
}

// Para crear los objetos de tipo persona
let padre = new Persona('Juan', 'Pérez', 'jperez@gmail.com');
console.log(padre.nombreCompleto()); // Juan Pérez

let madre = new Persona('Maria', 'Gómez', 'maria@gmail.com');
console.log(madre.nombreCompleto()); // Maria Gómez
