// Sí es una sóla línea de código, podemos no utilizar {}
const myArrowFunction = () => console.log('Saludos desde mi función flecha');
myArrowFunction(); //'Saludos desde mi función flecha'

// Como es sólo una línea, no es neceario poner return, sólo se manda el texto sin {}
const saludar = () => 'Saludos desde función flecha';
console.log(saludar()); // Saludos desde función flecha

//Si queremos retornar un objeto, lo ponemos entre paréntesis, debido a que se puede confundir con el cuerpo de una función
const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log(regresaObjeto()); // { nombre: 'Juan', apellido: 'Lara' }

// Función con parámetros
//const funcionConParametros = (msg) => console.log(msg);
// Como se envía un sólo parámetro, podemos omitir los paréntesis
const funcionConParametros = msg => console.log(msg);
funcionConParametros('Saludo con parámetros'); // Saludo con parámetros 

// Varios parámetros
const variosParámetros = (a, b) => a + b;
console.log(variosParámetros(3,4)); // 7
