//Una función de tipo callback, es una función que se pasa como parámetro a otra función
// Y dentro de la función, vamos a poder llamar a otra función en cualquier momento
// En JS las funciónes se van ejecutando secuencialmente

myFunction1();
myFunction2();
function myFunction1() {
  console.log('función 1');
}

function myFunction2() {
  console.log('función 2');
}
// función 1
// función 2

//Función de tipo callback
function imprimir(msg){
  console.log(msg);
}

function sumar(a, b, funcionCallback){
  let res = a + b;
  funcionCallback(`Resultado ${res}`);
}
// Se le pasan los argumentos a, b y la función de tipo callback. Sólo con el nombre de la función, se pasa la referencia a la función.
sumar(2, 4, imprimir); // Resultado 6

