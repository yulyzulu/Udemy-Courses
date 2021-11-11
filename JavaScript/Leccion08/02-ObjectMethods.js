// Métodos
let persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  email: 'jperez@email.com',
  edad: 28,
  nombreCompleto: function() {
    return this.nombre + ' ' + this.apellido;
  }
};
console.log(persona.nombreCompleto()); // Juan Perez