// Array

// Mala practica
// const arreglo = new Array(100);
// arreglo.push(1);

const arreglo = [1, 2, 3, 4];
// no utilizar .push para agregar en arrays
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

// let arreglo2 = arreglo;
// arreglo.push(5);

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function (num) {
  return num * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
