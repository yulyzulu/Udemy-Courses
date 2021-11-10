let myNumber = "10";

console.log(myNumber); // 10
console.log(typeof myNumber); // string

// Conversión de String a Número

let edad = Number(myNumber);
// edad es un número
console.log(typeof edad); // number

if (edad >= 18) {
  console.log("Puede votar");
} else {
  console.log("Muy joven para votar"); 
}

// Muy joven para votar


// Condicional con operador ternario
let resultado = edad >= 18 ? 'Puede votar' : 'Es muy joven para votar';
console.log(resultado); // Es muy joven para votar