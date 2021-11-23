// Llamadas asíncronas, y además funciones callback utilizando el concepto de promesas
// En una promesa podemos manejar los 2 parámetros o solamente uno. No es necesario el manejo del error.
// Una promesa puede recibir como respuesta otra promesa y manejar promesas de forma encadenada

let promesa = new Promise((resolved) => {
  console.log('Inicio Promesa');
  //setTimeout recibe una función de tipo callback
  setTimeout(() => resolved('Saludos con promesa y timeOut'), 3000);
  console.log('Fin promesa');
});

promesa.then(valor => console.log(valor));
// Inicio Promesa
// Fin promesa
// Saludos con promesa y timeOut

