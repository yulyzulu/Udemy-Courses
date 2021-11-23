// SetTimeout con Async y Await

// promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout(){
  let miPromesa = new Promise(resolver => {
    console.log('Inicio función')
    setTimeout(() => resolver('Promesa con await y timeout'), 3000);
  });
  console.log(await miPromesa);
  // Como estamos trabajando con await, espera el resultado y sigue con la ejecución
  console.log('Fin función')
}

funcionConPromesaAwaitTimeout();
// Inicio función
// Promesaa con await y timeout
// Fin función
