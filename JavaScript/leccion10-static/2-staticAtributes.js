// Para definir atributos static, sólo se agrega static. Pertenece a la clase y no a ningun objeto.

class Persona {
  static contadorObjetosPersona = 0;

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    //Las variables estáticas no se pueden acceder por medio de this,sino que debemos acceder por el nombre de nuestra clase
    // Así cada vez que se crea un objeto y se llama al método constructor, se incrementa el contador
    Persona.contadorObjetosPersona++;
    console.log('Se incrementa contador ' + Persona.contadorObjetosPersona); // Se incrementa contador 1, Se incrementa contador 2
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

// Sí mandamos a llamar un objeto con el atributo static contadorObjetoPersona, va a ser undefined
// La referencia sí existe pero no se puede acceder desde el objeto. Cuando JS no encuentra la variable le da un valor de undefined
console.log(persona1.contadorObjetoPersona); // undefined => Pero aquí se está asignando una nueva variable al objeto persona1

// El atributo static lo tenemos que acceder por medio de nuestra clase. Igual a los métodos estáticos.
console.log(Persona.contadorObjetosPersona); // 2
// Sí la queremos acceder desde la clase hija también heredan los atributos estáticos
console.log(Empleado.contadorObjetosPersona); // 2