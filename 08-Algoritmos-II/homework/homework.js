'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Algoritmo recursivo que divide la lista en dos partes utilizando un "pivote" definido por nosotros (puede ser el elemento inicial, final o aleatorio).
  // Se mueven los elementos de la lista conforme a si es mayor(rigth) o menor(left) que el pivote.
  // Luego ordena recursivamente cada parte de la misma manera, dividiendo en dos partes a partir de un pivote hasta llegar al caso de corte (1 elemento).
  // Devolver el array ordenado resultante.
  // Tu código:
  if(array.length === 1) return array
  const pivotIndex = Math.floor(Math.random() * array.length);
  const pivot = array[pivotIndex];

  let left = [];
  let rigth = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue; // Saltar el pivot
    if(array[i] > pivot) {
      rigth.push(array[i])
    } else if(array[i] <= pivot) {
      left.push(array[i])
    }
  }
  if(left.length > 1) {
    left = quickSort(left)
  }
  if(rigth.length > 1) {
    rigth = quickSort(rigth)
  }

  
  array = left.concat(pivot, rigth)

  return array
}

function mergeSort(array) {
  // Divide la lista en mitades iguales y ordenando recursivamente cada mitad.
  // El caso de corte ocurre cuando se tiene un elemento
  // Los valores se van ordenaran de menor a mayor
  // Finalmente, junta (o mergea) los grupos odenados de forma secuencial

  // El proceso de Merge Sort se puede resumir en los siguientes pasos:
  //1. División: Se divide la lista original en dos mitades aproximadamente iguales.
  //2. Ordenamiento recursivo: Se aplica Merge Sort de forma recursiva a cada mitad, dividiéndolas nuevamente en sub-mitades y ordenando cada una de ellas.
  //3. Fusión (Merge): Una vez que todas las sub-mitades están ordenadas, se combinan para formar la lista final ordenada. Durante la fusión, se comparan los elementos de ambas sub-mitades y se colocan en orden en la lista resultante.
  //4.Caso base: El proceso recursivo se detiene cuando la lista contiene solo un elemento, ya que un solo elemento se considera automáticamente ordenado.
  // Tu código:
  if(array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  array = []

  left = mergeSort(left);
  right = mergeSort(right);
  while(left.length && right.length) {
    if(left[0] <  right[0]) {
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  }
  array = array.concat(left, right)
  return array
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
