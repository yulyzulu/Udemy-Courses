// Sobreescritura en JS
// Desde la clase hija podemos sobreescribir los métodos de la clase padre
// Es modificar el comportamiento de algún método definido en la clase padre, tiene que tener el mismo nombre, sino ya no sería sobre escritura, sino la creación de un núevo método.
// Por eso tenemos que escribir el mismo nombre y también los mismos parámetros.

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
}

class Empleado extends Persona{
  constructor(nombre, apellido, departamento){
    // super llama al constructor de la clase padre
    // Con esto no tuvimos que reescribir todo el método, sino que pudimos reutilizar el código de la clase padre
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
    // Para acceder al método de la clase padre, podemos utilizar super
    return super.nombreCompleto() + ', ' + this._departamento;
  }
}

let persona1 = new Persona('Juan', 'Pérez');
console.log(persona1); // Persona { _nombre: 'Juan', _apellido: 'Pérez' }

let empleado1 = new Empleado('Carlos', 'Lara', 'Ventas');
console.log(empleado1); // Empleado { _nombre: 'Carlos', _apellido: 'Lara', _departamento: 'Ventas' }
console.log(empleado1.nombreCompleto()); // Carlos Lara, Ventas