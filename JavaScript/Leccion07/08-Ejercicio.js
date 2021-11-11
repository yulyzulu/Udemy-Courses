let resultado = sumarTodo(5, 4, 13, 10, 9);

function sumarTodo() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(resultado); // 41