// Con la función de flecha no se aplica el concepto de hoisting
// Sí tratamos de acceder a ella antes de ser definida, no podríamos mandarla a llamar
// Arrojaría "Cannot access 'myArrowFunction' before initialization"
// Además al utilizar let o const no se permite el hoisting.
let myArrowFunction = () => {
  console.log('Saludos desde mi función flecha');
}
myArrowFunction();
// Saludos desde mi función flecha