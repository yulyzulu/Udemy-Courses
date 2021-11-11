// Creación de objetos
// Primera forma de crear un objeto. La más común.
let persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  email: 'jperez@email.com',
  edad: 28,
};

// Segunda forma de crear un objeto. Con la palabra reservada new Object para reservar el espacio en memoria.
// Una vez creado el objeto nuevo en memoria, podemos agregar atributos o métodos dinámicamente al objeto que se ha creado.
// new reserva un nuevo espacio en memoria, y persona2 guarda esa referencia.
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.apellido = 'Lara';
persona2.tel = 222;
console.log(persona2.tel); // 222
console.log(persona2); //{nombre: 'Carlos', apellido: 'Lara, tel: 222}