// El método apply se puede utilizar muy similar al método call

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

// Apply se utiliza igual que call para las llamadas sin parámetros, pero cuando se mandan parámetros se deben mandar en un arreglo
console.log(persona1.nombreCompleto('Lic', '2222222')); // Lic: Juan Pérez, 2222222 
console.log(persona1.nombreCompleto.apply(persona2, ['Ing', '333333'])); // Ing: Carlos Lara, 3333333
