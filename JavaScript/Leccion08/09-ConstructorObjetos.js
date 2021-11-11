// Si queremos contruir más objetos de tipo persona debemos crear una función constructor
// Debido a que como lo hemos hecho hasta el momento, el objeto que ya hemos creado, no lo podemos utilizar para crear otros objetos de tipo persona.

// Para trabajar con constructores utilizaremos la palabra new, para reservar un espacio en memoria del objeto que vamos a crear
// Cada vez que se utiliza new crea un nuevo espacio en memoria para cada objeto

// Función constructor de objetos de tipo persona con 3 atributos

function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
}

// Para crear los objetos de tipo persona
let padre = new Persona('Juan', 'Pérez', 'jperez@gmail.com');
console.log(padre); // Persona { nombre: 'Juan', apellido: 'Pérez', email: 'jperez@gmail.com' }

let madre = new Persona('Maria', 'Gómez', 'maria@gmail.com');
console.log(madre); // Persona { nombre: 'Maria', apellido: 'Gómez', email: 'maria@gmail.com' }

// Si hacemos algun cambio en uno de los objetos, sólo va afectar ese objeto
padre.nombre = 'Carlos';
console.log(padre); //Persona { nombre: 'Carlos', apellido: 'Pérez', email: 'jperez@gmail.com' }
console.log(madre); // Persona { nombre: 'Maria', apellido: 'Gómez', email: 'maria@gmail.com' }