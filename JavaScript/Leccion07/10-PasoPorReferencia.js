// Paso por Referencia
// A un objeto se le pueden asociar propiedades y métodos
// Persona guarda una referencia a un objeto
const persona = {
  nombre: 'Juan',
  apellido: 'Perez'
};

function cambiarValorObjeto(p1) {
  p1.nombre = 'Carlos';
  p1.apellido = 'Lara';
}

cambiarValorObjeto(persona);
// Debido a que mandamos la referencia en memoria. Por eso se puede modificar.
console.log(persona); // {nombre: 'Carlos', apellido: 'Lara'}