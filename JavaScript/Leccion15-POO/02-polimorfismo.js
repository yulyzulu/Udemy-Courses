// Polimorfismo significa múltiples formas
// Es decir, que con una función podemos llamar las múltiples formas en que se puede llamar un método dependiendo del tipo al que se esté llamando (ya sea clase padre o clase hija)
// Creamos un método genérico, que puede recibir diferentes tipos que apuntan a diferentes referencias.

class Empleado {
  constructor(nombre, sueldo){
    this.nombre = nombre;
    this.sueldo = sueldo;
  }

  obtenerDetalles(){
    return `Empleado: ${this.nombre}, sueldo: ${this.sueldo}`;
  }
}

class Gerente extends Empleado{
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }
  obtenerDetalles() {
    return `Gerente: ${super.obtenerDetalles()}, dpto: ${this.departamento}`
  }
}

function imprimir(tipo) {
  console.log(tipo.obtenerDetalles());
}

let empleado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

imprimir(empleado1); // Empleado: Juan, sueldo: 3000  Llama al método obtenerDetalles de la clase padre
imprimir(gerente1); // Gerente: Empleado: Carlos, sueldo: 5000, dpto: Sistemas => Llama al método obtenerDetalles de la clase hija