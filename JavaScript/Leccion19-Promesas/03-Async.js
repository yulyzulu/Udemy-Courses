/* La palabra async nos va a facilitar el uso de promesas y al poner async antes de la definición de un método
  significa que ese método está obligado a regresar una promesa */

// async indica que una función regresa una promesa
// Así simplificamos el uso de promesas, una función la podemos convertir en una promesa simplemente agregando async
async function miFuncionConPromesa() {
  return 'Saludos con promesa y async';
}

miFuncionConPromesa().then(valor => console.log(valor));