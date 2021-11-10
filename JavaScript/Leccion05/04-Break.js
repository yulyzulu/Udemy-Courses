// break => La utilizamos para romper un ciclo

for (let count = 0; count <= 10; count++) {
  if (count % 2 == 0) {
    console.log(count);
    break; //0
  }
}
console.log("Fin del ciclo for");
// Break termina el ciclo después de que encuentra el primer número par.