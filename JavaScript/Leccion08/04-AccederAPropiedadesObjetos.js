
let persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  email: 'jperez@email.com',
  edad: 28,
  nombreCompleto: function() {
    return this.nombre + ' ' + this.apellido;
  }
};
// Para acceder a las propiedades de los objetos:
console.log(persona.nombre); // Juan
// Mandarle la propiedad como sí fuera un array pero en string
console.log(persona['apellido']); // Perez
// Recorrer las propiedades con un ciclo for in
for (propiedad in persona) {
  // Accede a las propiedades
  console.log(propiedad); // nombre, apellido, email, edad, nombreCompleto
  // Accede a los valores
  console.log(persona[propiedad]); // Juan, Perez, jperez@email.com, 28, [λ: nombreCompleto]
}