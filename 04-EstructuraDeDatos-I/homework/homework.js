'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1
*/

function nFactorial(n) {
  if(n < 0) return "Error, no existe factorial de numero negativo"
  if(n === 0) return 1

  return n * nFactorial(n - 1)
}

/*
nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/


var fibo = [0, 1];
fibo[fibo.length] = fibo[fibo.length - 1] + fibo[fibo.length - 2];
fibo[fibo.length] = fibo[fibo.length - 1] + fibo[fibo.length - 2];
fibo[fibo.length] = fibo[fibo.length - 1] + fibo[fibo.length - 2];
fibo[fibo.length] = fibo[fibo.length - 1] + fibo[fibo.length - 2];
fibo[fibo.length] = fibo[fibo.length - 1] + fibo[fibo.length - 2];
fibo[fibo.length] = fibo[fibo.length - 1] + fibo[fibo.length - 2];
// console.log(fibo)

function nFibonacciWithFor(n) { // ITERATIVA
  let arr = [0, 1]
  for (let i = 0; i <= n - 1; i++) {
    arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2];
  }
  return arr[n]
}
// console.log(nFibonacciWithFor(7))
// console.time('fibonacciTest');

function nFibonacci(n, cache = {}) { // RECURSIVIDAD + CACHE
  if(n === 0) return 0
  if(n === 1) return 1

  if(cache[n]) return cache[n]

  const unPasoAtras = nFibonacci(n - 1, cache)
  const dosPasosAtras = nFibonacci(n - 2, cache)
  cache[n] = unPasoAtras + dosPasosAtras

  return cache[n]
}

// console.log(nFibonacci(20))

// console.timeEnd('fibonacciTest');


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
  constructor() {
    this.queue = []
  };

  enqueue(data) {
    return this.queue.unshift(data)
  }
  dequeue() {
    return this.queue.pop()
  }

  size() {
    return this.queue.length
  }

}

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
