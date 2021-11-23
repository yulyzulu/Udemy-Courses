// Promesas
// Una promesa es código que tiene varios estados. Así que podemos lanzar una petición para procesar un código para que se resuelva(Resolved) o en caso de que hayan problemas (Rejected)
// Tenemos 2 caminos, un camino en el que la promesa, el código esperado, se ejecutó correctamente (.then()) => Resolved
// Y otro camino en el que pudimos haber tenido un error (.catch) => Rejected
// Y mientras la promesa no haya terminado de ejecutar su código. Se encuentra en estado de pendiente.

// Sintáxis básica para crear una promesa
// La promesa va a tener dos parámetros que van a ser de tipo callback
// Se llama la función resolved en caso de que el código sea exitoso o la función rejected en caso de fallo
let myPromise = new Promise((resolved, rejected) => {
  let expresion = true;
  if (expresion) {
    resolved('Resolvió correctamente');
  } else {
    rejected('Se produjo un error');
  }
});
// Son exactamente lo mismo, pero con otra sintáxis
// myPromise.then(valor => console.log(valor), error => console.log(error));
myPromise
.then(valor => console.log(valor))
.catch(error => console.log(error));

// Resolvió correctamente