// Al crear un método static => este se asocia a la clase y no con los objetos de la clase
// Estos métodos static pueden ser hereados a los hijos de la clase.

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

  toString(){
    return this.nombreCompleto();
  }
  static saludar() {
    console.log('Saludos desde método static');
  }
  static saludar2(persona) {
    console.log(persona.nombre + ' ' + persona.apellido);
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

// Sí tratamos de ingresar al método static de saludar no va a ser posible. Porque el método static se asocia a la clase pero no con los objetos.
// No es posible llamar un método static desde un objeto. Pero sí desde una clase
//persona1.saludo(); // persona1.saludo() is not a function
Persona.saludar(); // Saludos desde método static 
// Sin embargo, a un método static, sí le podemos pasar como argumentos un objeto
Persona.saludar2(persona1); // Juan Pérez
// El método static se hereda a las siguientes clases
Empleado.saludar(); // Saludos desde método static
Empleado.saludar2(empleado1); // Carlos Lara