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

//Instanceof nos permite saber sí el tipo que estamos recibiendo pertenece a cierta clase
// Esto nos puede servir: Para acceder a atributos propios de cada clase

function determinarTipo(tipo) {
  console.log(tipo.obtenerDetalles());
  if (tipo instanceof Gerente) {
    console.log('Es un objeto de tipo Gerente');
  } else if (tipo instanceof Empleado) {
    console.log('Es un objeto de tipo Empleado');
  } else if (tipo instanceof Object) {
    console.log('Es un objeto de tipo Object');
  }
}

let empleado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

determinarTipo(empleado1);
// Empleado: Juan, sueldo: 3000
// Es un objeto de tipo Empleado
determinarTipo(gerente1);
// Gerente: Empleado: Carlos, sueldo: 5000, dpto: Sistemas
// Es un objeto de tipo Gerente