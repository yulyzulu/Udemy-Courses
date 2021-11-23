// await va a esperar el resultado de una promesa
// De esta manera simplificamos la llamada a nuestra promesa y no vamos a tener que utilizar (then()), sino que con await vamos a esperar el resultado

// async / await
async function funcionConPromesaYAwait() {
  let miPromesa = new Promise(resolver => {
    resolver('Promesa con await');
  });
  // Await lo que hace es mandar a llamar la promesa
  console.log(await miPromesa);
}
funcionConPromesaYAwait();
// Promesa con await