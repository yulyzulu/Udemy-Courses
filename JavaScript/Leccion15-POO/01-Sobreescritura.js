// Sobreescritura => caso en la vida real, si tenemos una madre que tiene una buena voz al cantar, lo más seguro es que también la hija herede esta característica
// Sin embargo, la hija no cantará exactamente igual que la madre sino que cantará de una manera propia, pero varías características de la voz, las va a heredar de su madre
// Sobreescritura => La clase hija va a agregar su propio comportamiento.
// Como buena práctica es agregar get y set a los atributos y el nombre con _. En este ejemplo no los utilizaremos.

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
  // Aquí sobreescribimos el método obtenerDetalles(), para mejorarlo o agregar algo más
  obtenerDetalles() {
    // con super accedemos al método de la clase padre, ya que al sobreescribir se oculta el método
    return `Gerente: ${super.obtenerDetalles()}, dpto: ${this.departamento}`
  }
}

let empleado1 = new Empleado('Juan', 3000);
console.log(empleado1.obtenerDetalles()); //Empleado: Juan, sueldo: 3000 

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
console.log(gerente1); // Gerente { nombre: 'Carlos', sueldo: 5000, departamento: 'Sistemas' }
console.log(gerente1.obtenerDetalles()); // Gerente: Empleado: Carlos, sueldo: 5000, dpto: Sistemas 