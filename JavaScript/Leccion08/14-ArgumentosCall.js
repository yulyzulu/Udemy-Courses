// Podemos pasar argumentos al método call
let persona1 = {
  nombre: 'Juan',
  apellido: 'Pérez',
  nombreCompleto: function(titulo, tel) {
    return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
  }
}

let persona2 = {
  nombre: 'Carlos',
  apellido: 'Lara',
}

console.log(persona1.nombreCompleto('Lic', '4444444')); // Lic: Juan Pérez, 4444444 
// Así se le pasan los parámetros
console.log(persona1.nombreCompleto.call(persona2, 'Ing', '333333')); // Ing: Carlos Lara, 3333333

