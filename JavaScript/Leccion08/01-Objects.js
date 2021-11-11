// Básicamente en JS todo lo que manejamos son objetos
// Los tipos de datos primitivos como un número no tiene propiedades, ni métodos por ejemplo sí declaramos una variable let x = 10;
// Los objetos pueden contener propiedades y métodos
// tipo primitivo
let x = 10;
console.log(x.length); // undefined

let persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  email: 'jperez@email.com',
  edad: 28
};
// El objeto crea un espacio en memoria y este objeto, crea una referencia, con las propiedades de nombre, apellido, email, edad
// La referencia es un número hexadecimal que se le asigna a la variable persona.
// Para acceder a las propiedades lo hacemos así:
console.log(persona.nombre); // Juan
console.log(persona.edad); // 28
console.log(persona); // { nombre: 'Juan', apellido: 'Perez', email: 'jperez@email.com', edad: 28 }