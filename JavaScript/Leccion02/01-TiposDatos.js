// Tipos de datos

// String
var name = "Carlos";
console.log(name);
console.log(typeof name);

// Number
var number = 1000;
console.log(number);
console.log(typeof number);

// Object
var object = {
  name: "Yuli",
  lastName: "Zuluaga",
  cel: "5555555"
};
console.log(object);
console.log(typeof object);


// Boolean
var flag = true;
console.log(flag);
console.log(typeof flag);

// Function
function myFunction() {}
console.log(myFunction);
console.log(typeof myFunction);

// Symbol
var simbol = Symbol("Mi simbolo");
console.log(simbol);
console.log(typeof simbol);

// Clase es una función
class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}
console.log(Person);
console.log(typeof Person);

// undefined Es el valor por default cuando declaramos una variable
var x;
console.log(x);
console.log(typeof x);
var z = undefined;
console.log(z);
console.log(typeof z);

// null
var y = null;
console.log(y);
console.log(typeof y);

// Array
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

// cadena vacía es de tipo string
var j = '';
console.log(j);
console.log(typeof j);