// Concatenar cadenas
var name = 'Yulieth';
var lastName = 'Zuluaga';

var completeName = name + ' ' + lastName;
console.log(completeName);
console.log(typeof completeName);

var completeName2 = 'Carlos ' + 'Perez';
console.log(completeName2); // Carlos Perez

// Se lee de izq a derecha y concatena el número
var x = name + 219;
console.log(x); // Yulieth219

// Para que la suma tenga prioridad debe ponerse entre parentesis
var y = name + (2 + 4);
console.log(y); //Yulieth6

var i = 2 + 4 + name;
console.log(i); //6Yulieth

