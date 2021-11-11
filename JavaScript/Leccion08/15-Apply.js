// El método apply se puede utilizar muy similar al método call

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

// Appy se utiliza igual que call para las llamadas sin parámetros
console.log(persona1.nombreCompleto()); // Juan Pérez
console.log(persona1.nombreCompleto.apply(persona2)); // Carlos Lara
