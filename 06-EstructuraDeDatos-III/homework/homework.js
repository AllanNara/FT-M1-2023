'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree {
   constructor(value) {
      this.value = value;
      this.right = null;
      this.left = null;
      this.length = 1;
   }

   insert(value) {
      if(value > this.value) {
        if(!this.right) {
         this.right = new BinarySearchTree(value)
         }
        else this.right.insert(value)
      }
      if(value <= this.value) {
         if(!this.left) {
            this.left = new BinarySearchTree(value)
         }
         else this.left.insert(value)
      }
      this.length++
    };

    size() {
      return this.length
    }

    contains(value) {
      if(value === this.value) return true;
      if(value > this.value && this.right) {
         return this.right.contains(value)
      } else if(value < this.value && this.left) {
         return this.left.contains(value)
      }
      return false
    };

    depthFirstForEach(cb, order) {
      if(order === "in-order" || !order) {
         if(this.left) this.left.depthFirstForEach(cb, order)
         cb(this.value)
         if(this.right) this.right.depthFirstForEach(cb, order)
      }
      if(order === "post-order") {
         if(this.left) this.left.depthFirstForEach(cb, order)
         if(this.right) this.right.depthFirstForEach(cb, order)
         cb(this.value)
      }
      if(order === "pre-order") {
         cb(this.value)
         if(this.left) this.left.depthFirstForEach(cb, order)
         if(this.right) this.right.depthFirstForEach(cb, order)
      } 
   };
   
   breadthFirstForEach(cb, depth = []) {
   cb(this.value)

   this.left && depth.push(this.left)
   this.right && depth.push(this.right)
   if(depth.length)
      depth.shift().breadthFirstForEach(cb, depth)
   //    cb(this.value)
   //    if(this.left) cb(this.left.value)
   //    if(this.right) cb(this.right.value)
   //    if(this.left) {
   //       if(this.left.left) this.left.left.breadthFirstForEach(cb)
   //       if(this.right) {
   //          if(this.right.left) this.right.left.breadthFirstForEach(cb)
   //          if(this.right.right) this.right.right.breadthFirstForEach(cb)
   //       }
   //    }
    };

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
