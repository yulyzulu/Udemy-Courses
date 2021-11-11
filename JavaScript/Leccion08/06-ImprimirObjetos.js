let persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  email: 'jperez@email.com',
  edad: 28,
  nombreCompleto: function() {
    return this.nombre + ' ' + this.apellido;
  }
};

//Imprimir Objetos
// Concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido); // Juan, Perez
// Iterar cada propiedad con un ciclo for in
for (propiedad in persona) {
  console.log(persona[propiedad]); // Juan, Perez, jperez@email.com, 28, [λ: nombreCompleto]
}
// Object.values() que nos regresa el objeto pero como un arreglo
let personaArray = Object.values(persona);
console.log(personaArray); // [ 'Juan', 'Perez', 'jperez@email.com', 28, [λ: nombreCompleto] ]
// JSON.stringify() convierte nuestro objeto a una cadena.
let personaString = JSON.stringify(persona);
console.log(personaString); // {"nombre":"Juan","apellido":"Perez","email":"jperez@email.com","edad":28} 