// continue => va a la siguiente iteracción del ciclo for
for (let count = 0; count <= 10; count++) {
  if (count % 2 !== 0) {
    continue;
  }
  console.log(count);
}
console.log("Fin del ciclo for");