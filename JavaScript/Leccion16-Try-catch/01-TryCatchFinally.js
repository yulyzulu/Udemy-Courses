// Manejo de errores
// En JS siempre existe la posibilidad de que ocurran ciertos errores, hay formas en las que podemos recuperarnos de ciertos errores
// Cuando ocurre un error en nuestro programa, las demás líneas no se ejecutan.

// Sintaxis para manejar las variables no declaradas
"use strict"
// Con try y catch podemos agarrar los errores y hacer que el programa continúe
// Finally siempre se va a ejecutar independientemente de que se ejecute try o catch. Y es opcional utilizarlo.
try {
  //x = 10;
  miFuncion();
} catch(error) {
  console.log(error);
}
finally {
  console.log('Termina la revisión de errores')
}
console.log('Continuamos');
// [ReferenceError: miFuncion is not defined]
// Termina la revisión de errores 
// Continuamos