// Método Call => Nos va a permitir llamar un método que está definido en un objeto desde otro objeto.

let persona1 = {
  nombre: 'Juan',
  apellido: 'Pérez',
  nombreCompleto: function() {
    return this.nombre + ' ' + this.apellido;
  }
}

let persona2 = {
  nombre: 'Carlos',
  apellido: 'Lara',
}

// Uso de call para usar el método persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto()); // Juan Pérez
// Así se utiliza el método call
console.log(persona1.nombreCompleto.call(persona2)); // Carlos Lara
