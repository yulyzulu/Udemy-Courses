// AND (&&), regresa true sí ambos operandos son verdaderos

let a = 4;
let min = 0, max = 10;

if (a >= min && a <= 10) {
  console.log('Dentro del rango');
} else {
  console.log('Fuera del rango');
}

// Dentro del rango

// OR (||) Regresa true sí cualquiera de los 2 operandos es verdadero
// Evaluaremos sí el padre puede ir a ver el juego del hijo
let vacaciones = true, diaDescanso = false;
if (vacaciones || diaDescanso) {
  console.log('El padre puede asistir al juego del hijo');
} else {
  console.log('El padre está ocupado');
}
// El padre puede asistir al juego del hijo