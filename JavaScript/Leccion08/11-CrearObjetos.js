// Para crear objetos, no siempre tenemos que utilizar la palabra new

// Es la opción más formal, pero es más común con {}
let miObjeto = new Object();
// Es la forma más común cuando estamos utilizando JS para crear objetos.
let miObjeto2 = {};

// En el caso para crear un string
// Se puede utilizar new String() (Función constructor de tipo string). Es la opción más formal, pero no es la más recomendable.
let myCadena1 = new String('Hola');
// Pero es más común utilizar ''. Es la más recomendable.
let myCadena2 = '';

// Lo mismo pasa con number, sí queremos crear un objeto tipo número usamos new. No es lo  más común, ni lo más recomendable.
let myNumero = new Number(1);
// Pero sí queremos crear un tipo primitivo y de la forma más convencinal se hace:
let myNumero2 = 1;

// Booleanos
// Para crear un nuevo objeto de tipo booleano, la opción más formal
let myBoolean = new Boolean(false);
// La opción más recomendable
let myBoolean2 = false;

// Arreglos
// La forma más formal para crear un nuevo arreglo
let myArreglo = new Array();
// La forma más recomendable
let myArreglo2 = [];

// Para definir una función
// Function es un objeto, por eso podemos utilizar new para crear una nueva función
let miFunction = new Function();
// Notación simplificada
let miFunction2 = function(){};