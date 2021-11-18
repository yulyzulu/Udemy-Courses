// Clase Object es la clase padre de todas las clases en JS
// Es la clase de la que heredamos la primera clase, es decir que cuando no tenemos un extends de otra clase, es como si fuera un extends Object
// class Persona extends Object {}

// La clase Object contiene varios métodos
// toString => Este método nos va a permitir mandar a imprimir información del estado del objeto, es decir los valores actuales de cada uno de los atributos de nuestro objeto
// Todas las clases heredan las características de la clase Object, incluyendo prototype y los métodos relacionados a este objeto.
// con Object.prototype podemos acceder al método toString
// prototype: nos permite agregar atributos o métodos de manera dinámica a nuestras clases. Así que cuando estamos trabajando con las clases, también vamos a  heredar las características de la clase Object, ya que todas las clases sí no lo indican, heredan de la clase Object. Incluyendo prototype y los métodos relacionados a este objeto. Así que automáticamente ya estamos heredando el método toString()

class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre(){
    return this._nombre;
  }
  set nombre(nombre){
    this._nombre = nombre;
  }
  get apellido(){
    return this._apellido;
  }
  set apellido(apellido){
    this._apellido = apellido;
  }
  nombreCompleto(){
    return this._nombre + ' ' + this._apellido;
  }
  // Aquí se sobreescribe el método heredado de la clase (Object) Object.prototype
  toString(){
    // Se aplica polimorfismo en esta llamada a nombreCompleto (Múltiples formas en tiempo de ejecución)
    // El método que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
    return this.nombreCompleto();
  }
}

class Empleado extends Persona{
  constructor(nombre, apellido, departamento){
    super(nombre, apellido);
    this._departamento = departamento;
  }
  get departamento(){
    return this._departamento;
  }
  set departamento(departamento){
    this._departamento = departamento;
  }
  nombreCompleto(){
    return super.nombreCompleto() + ', ' + this._departamento;
  }
}

let persona1 = new Persona('Juan', 'Pérez');
console.log(persona1); // Persona { _nombre: 'Juan', _apellido: 'Pérez' }

let empleado1 = new Empleado('Carlos', 'Lara', 'Ventas');
console.log(empleado1); // Empleado { _nombre: 'Carlos', _apellido: 'Lara', _departamento: 'Ventas' }

// Cuando utilizamos empleado1.toString(), en el navegador va a imprimir [object Object] y no nos dá mas información
// console.log(empleado1.toString()); // [object Object]

// Por eso sobreescribimos el comportamiento del método toString heredado de la clase Object.prototype. En la clase Persona vamos a sobreescribier el método toString

// Ahora sí volvemos a llamar el método toString
console.log(empleado1.toString()); // Carlos Lara, Ventas
// Aquí se ve que se ejecuta el método toString de la clase hija. A esto también se le conoce como polimorfismo vamos a poder llamar un método definido en la clase padre o en la clase hija.