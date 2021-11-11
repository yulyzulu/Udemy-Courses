// Parámetros: cuando declaramos una función, las variables que va a recibir la función son parámetros.
// Argumentos: Son los valores que finalmente pasamos a nuestra función cuando la llamamos.

// Recordemos que una función se puede definir también como un objeto y tiene la propiedad arguments
// arguments es un array

let sum = function (a, b) {
  console.log(arguments[0]); // 3
  console.log(arguments[1]); // 5
  return a + b;
}

let resultado = sum(3, 5);
console.log(resultado); // 8

// Cuando en JS no pasamos argumentos a las funciones, estos automaticamente toman el valor de undefined
// Si intentamos sumar nos dará un resultado de NaN, debido a que los parámetros tomaron el valor de undefined
resultado = sum();
console.log(resultado); // NaN

// También le podemos poner valores por default, si no se manda nada de argumentos.
// Aunque los argumentos sobreescriben los parametros por default.
// let sum = function (a = 5, b = 3) {
//   console.log(arguments[0]); // 3
//   console.log(arguments[1]); // 5
//   return a + b;
// }

// En JS no es necesario que el número de argumentos concuerde con el número de parámetros, sí son menos los parámetros tomaran el valor de undefined, pero si son más con arguments[i] podemos acceder al valor de los demás argumentos enviados.

