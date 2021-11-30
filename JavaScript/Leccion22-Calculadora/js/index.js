function sumar() {
  const a = parseInt(document.getElementById('operandoA').value);
  const b = parseInt(document.getElementById('operandoB').value);
  let result = a + b;
  if (isNaN(result)) {
    result = 'La operación no incluye números';
  }
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  console.log(`Resultado: ${result}`);
}