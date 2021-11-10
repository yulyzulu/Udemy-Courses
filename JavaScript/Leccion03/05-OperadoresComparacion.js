let a = 3, b = 2, c = "3";

// == verifica el valor, sin importar el tipo
let z = a == b;
console.log(z); // false

// === verifica valor y tipo de variable
z = a === c;
console.log(z); // false


/*  != sí es diferente */
z = a != c;
console.log(z); // false

/*  != sí es diferente de manera estricta (mismo tipo) */
z = a !== c;
console.log(z); // true
