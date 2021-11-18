// También podemos trabajar con atributos de clase, sin tenerlos que declarar en el constructor
// Es un atributo que se asocia con los objetos y no con la clase en sí misma.
class Persona {
  static contadorObjetosPersona = 0; // Atributo de nuestra clase

  email = 'Valor default del email'; // Atributo de nuestros objetos

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    Persona.contadorObjetosPersona++;
    console.log('Se incrementa contador ' + Persona.contadorObjetosPersona);
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

// Podemos acceder a los atributos de la clase, pero al no ser static, se puede acceder desde los objetos.
console.log(persona1.email); // Valor default del email
console.log(empleado1.email); // Valor default del email
// Si lo quisiéramos acceder desde nuestra clase, como sí fuera un atributo static será undefined. Debido a que en el momento es como si se estuviera creando la variable static email y la está asociando a la plantilla y su valor por default sería undefined
console.log(Persona.email); // undefined
console.log(Empleado.email); // undefined