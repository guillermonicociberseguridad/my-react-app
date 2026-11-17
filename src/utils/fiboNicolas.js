// Devuelve el número de la sucesión de Fibonacci que hay en la posición "pos"
export function fibonacci(pos) {
  const fib = [0, 1]; // la sucesión empieza siempre por 0 y 1

  for (let i = 2; i <= pos; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; // cada número es la suma de los dos anteriores
  }

  return fib[pos];
}
