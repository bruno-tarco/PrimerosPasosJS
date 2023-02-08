
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");
//console.log(ciudadesDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia","Perú","Chile","Brasil","Argentina","Uruguay","Venezuela"];

const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

//Remover el primer elemento
ciudadesDisponibles.shift()
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudad tenemos ${ciudadesDisponibles.length} elementos`);

//Remover el último elemento
ciudadesDisponibles.pop()
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudad tenemos ${ciudadesDisponibles.length} elementos`);

//Filtro de elemento de la lista
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

//Unificar los elementos de una cadena de caracteres
console.log(paisesDisponibles.join("-"));

//Ordenar la lista
console.log(paisesDisponibles.sort());


//Reconociendo la posición
console.log(`Perú está en la posición: ${paisesDisponibles.indexOf("Perú")}`);

//Unificar dos listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesYCiudades);