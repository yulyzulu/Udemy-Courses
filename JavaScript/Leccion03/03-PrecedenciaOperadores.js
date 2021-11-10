let a = 3, b = 2, c = 1, d = 4;

// Se evalúa de izquierda a derecha
let z = a * b + c;
console.log(z);

// Se evalúa de izquierda a derecha, pero la multiplicación toma mayor prioridad
z = c + a * b;
console.log(z);


z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);