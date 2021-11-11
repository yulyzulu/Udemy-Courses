// Una funciónn es un tipo de dato
// Sin embargo las funciones también pueden ser descritas como objetos
// Los objetos en JS pueden tener propiedades y métodos
// Tenemos una propiedad arguments, para saber cuántos elementos se han definido en nuestra función

function myfunction(a, b) {
  console.log(arguments.length);
  return a + b;
}

myfunction(3, 2);
// 2

// También tenemos métodos con los que comprobamos que una función es un objeto. Ej:
// Con el método toString() pasamos la función a texto.

let myTextFunction = myfunction.toString();
console.log(myTextFunction);
