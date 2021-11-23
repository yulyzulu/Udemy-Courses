// SetInterval
// Es una función parecida a SetTimeout en la cuál también va a recibir una función como parámetro (una función de tipo callback)
// Manda a llamar varias veces la función cada cierto tiempo

let reloj = () => {
  let fecha = new Date();
  console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
// setInterval llama la función reloj cada segundo
setInterval(reloj, 1000);
// 17:48:18
// 17:48:19