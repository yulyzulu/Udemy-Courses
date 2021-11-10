let myNumber = "18x";

let edad = Number(myNumber);
// edad es un número
console.log(typeof edad); // number
console.log(edad); //NaN

if (isNaN(edad)){
  console.log('No es un número');
} else {
  if (edad >= 18) {
    console.log("Puede votar");
  } else {
    console.log("Muy joven para votar");
  }
}

// No es un número

// Condicional con operador ternario

if (isNaN(edad)) {
  console.log("No es un número");
} else {
  let resultado = edad >= 18 ? 'Puede votar' : 'Es muy joven para votar';
  console.log(resultado);
}

// No es un número