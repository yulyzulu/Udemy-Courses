let persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  email: 'jperez@email.com',
  edad: 28,
  get nombreCompleto() {
    return this.nombre + ' ' + this.apellido;
  }
};
// Cuando queremos acceder a las funciones de un objeto tenemos que agregarle () para ejecutar la función, sino aparecerá sólo el nombre de la función
console.log(persona.nombreCompleto); // Juan Perez
// Existe otra forma de llamar la función y es utilizando get, que nos permite acceder a nuestras propiedades