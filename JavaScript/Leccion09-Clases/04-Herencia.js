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
}

class Empleado extends Persona{
  constructor(nombre, apellido, departamento){
    // super llama al constructor de la clase padre
    super(nombre, apellido);
    this._departamento = departamento;
  }
  get departamento(){
    return this._departamento;
  }
  set departamento(departamento){
    this._departamento = departamento;
  }
}

let persona1 = new Persona('Juan', 'Pérez');
console.log(persona1); // Persona { _nombre: 'Juan', _apellido: 'Pérez' }

let empleado1 = new Empleado('Carlos', 'Lara', 'Ventas');
console.log(empleado1); // Empleado { _nombre: 'Carlos', _apellido: 'Lara', _departamento: 'Ventas' }
// Aquí podemos ingresar a los métodos de la clase padre
console.log(empleado1.nombre); // Carlos