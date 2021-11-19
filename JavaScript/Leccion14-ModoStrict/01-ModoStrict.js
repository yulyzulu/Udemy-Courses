// Si empezamos a utilizar una variable sin haberla declarado JS no mostrará ningún error
// Sim embargo, existe el modo strict en JS para evitar este tipo de prácticas
// Es decir, que cada vez que una variable se utilice sin ser declarada JS arrojará un error
// Strict no nos permite utilizar una variable que no ha sido declarada anteriormente. Tenemos que declarar la variable con var, const o let para poder utilzarla.
// Podemos utilizar "use strict" al inicio del programa o al inicio de una función
"use strict"

x = 10; // x is not defined
console.log(x);

miFuncion();
function miFuncion(){
  y = 15; // y is not defined
  console.log(y);
}
