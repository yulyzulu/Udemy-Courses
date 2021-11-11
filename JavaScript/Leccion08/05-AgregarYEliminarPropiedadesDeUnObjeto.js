let persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  email: 'jperez@email.com',
  edad: 28,
  nombreCompleto: function() {
    return this.nombre + ' ' + this.apellido;
  }
};
// Agregar propiedades dinámicamente. Hay que tener cuidado porque así mismo se modifican las propiedades
persona.tel = 3333333;
console.log(persona); // { nombre: 'Juan', apellido: 'Perez', email: 'jperez@email.com', edad: 28, nombreCompleto: [λ: nombreCompleto], tel: 3333333 }

// Eliminar propiedades
delete persona.tel;
console.log(persona); //{ nombre: 'Juan', apellido: 'Perez', email: 'jperez@email.com', edad: 28, nombreCompleto: [λ: nombreCompleto]}