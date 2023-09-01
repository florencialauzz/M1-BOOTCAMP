'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

//Opcion iterativa 
//function nFsctorialIterativo(n) {
//   let factorial = n;

//   while (n > 1) {

//     n--;
//     factorial *= n;   5 * 4
//   }
//   return factorial;
// }

//

function nFactorial(n) {
  if (n < 0) return 1; 
  if (n === 1 || n === 0) {
    return 1; 
  } else {
    return n * nFactorial(n-1); 
  }
}

//Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// Posicion:  0  1  2  3  4  5  6  7   8 , 9

// El valor se calcula sumando los 2 numeros anteriores a el

function nFibonacci(n) {
  if (n < 0) return 0;
  if (n === 1) return 1;

  return nFibonacci(n - 1) + nFibonacci(n - 2);
//*                               3
  //             fn(3)               +           fn(2)
  //*                2               +            1
  //           fn(2)    +    fn(1)     ||      fn(1)      +     fn(0)
  //*           1      +      1        ||               1
  //     fn(1) + fn(0)  ||    1                 1         +      0
  //*          1
  //     1     +    0
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.fila = [];
}

Queue.prototype.enqueue = function (valor) {
  this.fila.push(valor);
};

Queue.prototype.dequeue = function () {
  if (this.fila.length === 0) return undefined;
  return this.fila.shift();
};

Queue.prototype.size = function () {
  return this.fila.length;
};








/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
