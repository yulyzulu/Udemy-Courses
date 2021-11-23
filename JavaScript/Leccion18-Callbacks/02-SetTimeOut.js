// El objetivo de las función es tipo callback, es que puedan ser utilizadas para procesos que se ejecutan de manera asyncrona
// Cuando hablamos de procesos sincronos, quiere decir que se ejecuta una línea a la vez (Primero la línea 1, luego la 2...)
// Sin embargo, cuando estamos tratando con funciones de tipo callback lo que hacemos es mandar a llamar la función sumar y posteriormente dentro del método mandar a llamar la función de tipo callback
// Y esa llamada va a establecer un nuevo flujo, es decir, que se va a realizar un proceso por separado, mientras la función de sumar, puede seguir trabajando.
// Permite ejecutar varios procesos por separados y a esto se le conoce como procesos asincronos.

// Llamadas asíncronas con uso setTimeout
function myFunctionCallback() {
  console.log('Saludo asíncrono después de 3 seg');
}

setTimeout(myFunctionCallback, 3000); // Saludo asíncrono después de 3 seg 

setTimeout(function(){ console.log('Saludo asíncrono 2')}, 2000);

setTimeout(() => console.log('Saludo asíncrono 3'), 1000);
// Dependiendo de los segundos que le pasemos, se va a ejecutar, esto no será secuencial.

// Saludo asíncrono 3
// Saludo asíncrono 2
// Saludo asíncrono después de 3 seg