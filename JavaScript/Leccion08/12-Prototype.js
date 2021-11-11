// Para crear agregar un método o atributo sin tenerlo que definir en el constructor, tenemos prototype
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function() {
    return this.nombre + ' ' + this.apellido;
  }
}
// Se agrega un nuevo atributo a todos los objetos Persona
Persona.prototype.tel = '4444444'; // Valor por default

let padre = new Persona('Juan', 'Pérez', 'jperez@gmail.com');
console.log(padre.tel); // 4444444
//Si queremos modificar el tel del objeto padre
padre.tel = '2222222';
console.log(padre.tel); // 222222

let madre = new Persona('Maria', 'Gómez', 'maria@gmail.com');
console.log(madre.tel); // 4444444 //Este es el valor por default
