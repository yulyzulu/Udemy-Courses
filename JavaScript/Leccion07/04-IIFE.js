// IIFE => Immediately Invoked Function Expression
// Funciones que se llaman así mismas

(function(){
  console.log('Ejecutando la función');
})();
// Ejecutando la función

// Esta función no se puede volver a llamar, ya que no la estamos asignando a ninguna variable,
// Ni tampoco le estamos asignando un nombre
// Puede ser útil cuando necesitamos que se llame la función en el momento en que se carga el programa
// Sí le vamos a mandar valores, se los envíamos al llamar la función ej:

(function(a, b) {
  console.log('Ejecutando la función: ' + (a + b));
})(3, 4);
// Ejecutando la función: 7