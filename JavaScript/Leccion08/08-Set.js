let persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  email: 'jperez@email.com',
  edad: 28,
  idioma: 'es',
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    return this.nombre + ' ' + this.apellido;
  }
};

console.log(persona.lang); // ES
// Cuando llamamos persona.lang está llamando al método set, y en teoría guarda persona.idioma en mayuscula
persona.lang = "en";
console.log(persona.lang); // EN
// El método set lo utilizamos para modificar los valores de los atributos de nuestro objeto.
console.log(persona.idioma) // EN
// Con el get creamos una función y con el set modificamos un valor de un atributo del objeto