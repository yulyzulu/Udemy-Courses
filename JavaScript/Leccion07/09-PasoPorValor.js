// Paso por valor
// Cuando utilizamos tipos que no son objetos (number, boolean, etc.). Cuando trabajamos con funciones y estamos envíando argumentos a dichas funciones.

// Tipos de datos primitivos => que no tienen asociados ni propiedades, ni métodos
let x = 10;

function cambiarValor(a)  {
  a = 20;
}
// Paso por valor
// Sólo manda una copia del valor
cambiarValor(x);
console.log(x); // 10