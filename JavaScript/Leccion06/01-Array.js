// Anteriormente se declaraba un array de la siguiente manera:
//let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');

// Ahora es mejor utilizar
// Sí al arreglo no vamos a agregarle otra referencia lo podemos declarar con const
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos); // ['BMW', 'Mercedes Benz', 'Volvo']
// A través de autos vamos a poder acceder a los elementos en memoria.

// Acceder a los elementos
console.log(autos[0]); // BMW
console.log(autos[2]); // Volvo

// Para recorrer todos los elementos
for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]); // BMW, Mercedes Benz, Volvo
}


// Modificar elementos del arreglo
autos[1] = 'MercedesBenz';
console.log(autos[1]); // MercedesBenz

// Agregar elementos a un arreglo
autos.push('Toyota');
console.log(autos); //  ['BMW', 'Mercedes Benz', 'Volvo', 'Toyota']


// Agregar elementos
// Verificar número de elementos del array
console.log(autos.length); // 4;

autos[autos.length] = 'Cadillac';
console.log(autos); // ['BMW', 'Mercedes Benz', 'Volvo', 'Toyota', 'Cadillac']

// También podemos agregar en el indice que queramos, no es recomendable a indices superiores debido a que quedan los espacios vacíos.
autos[6] = 'Porshe';
console.log(autos); // ['BMW', 'Mercedes Benz', 'Volvo', 'Toyota', 'Cadillac', , 'Porshe']


// Identificar sí estamos trabajando con un arreglo
console.log(typeof autos); // object

// Con ES6 se saca una función con la que podemos verificar sí es un arreglo
console.log(Array.isArray(autos)); // true
console.log(autos instanceof Array); // true