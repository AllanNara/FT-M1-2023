'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  const factores = [1];
  
  for (let i = 2; i <= num / 2; i++) {
    while (num % i === 0) {
      factores.push(i);
      num /= i;
    }
  }
  
  if (num > 1) {
    factores.push(num);
  }

  return factores
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swapped = true;
  while(swapped) {
    swapped = false
    for (let i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]) {
        let current = array[i]
        array[i] = array [i + 1];
        array[i + 1] = current;
        swapped = true
      }
    };
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:


  // -1  0  1  2  3  4   5   6
  //     |  |  |  |  |   |   |
  //....[2, 3, 5, 7, 9, 11, 17];
  //                         i
  //                      j
  for (let i = 1; i < array.length; i++) {
    let aux = array[i] // 11
    let j = i - 1 // 5

         //   TRUE     //  9    >    11
    while(j >= 0 && array[j] > aux) { // FALSE
      array[j + 1] = array[j]
      //      11    =      17
      j--  // 4
    }

    array[j + 1] = aux
    //    5    =   11
  }
  return array
}

// console.log(insertionSort([5, 3, 7, 9, 2, 17, 11]))

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min = i
    
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j
      }
    }
    let aux = array[i]
    array[i] = array[min]
    array[min] = aux
  }
  return array
}

console.log(selectionSort([9, 3, 7, 5, 8, 1, 2, 11, 6]))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
