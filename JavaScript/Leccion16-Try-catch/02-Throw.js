// Como parte del manejo de errores, también existe la clausula throw con la que podemos arrojar nuestros propios errores
// Con throw podemos arrojar una nueva excepción(error) en caso de que se requiera

"use strict"
let resultado = 'Hola';
try {
  // Error que generamos
  if (isNaN(resultado)) throw 'No es un número';
  else if (resultado === '') throw 'Es cadena vacía';
  else if (resultado >= 0) throw 'Valor positivo';
  else if (resultado < 0) throw 'Valor negativo';
} catch (error) {
  console.log(error); // No es número
  console.log(error.name); // undefined
  console.log(error.message); // undefined
}

try {
  x = 10;
} catch (error) {
  console.log(error); // [ReferenceError: x is not defined]
  console.log(error.name); // ReferenceError
  console.log(error.message); // x is not defined
}


