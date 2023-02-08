//Tipos de datos
//Alfanumerico
//let nombrePasajero = "Pedro Silva";
//console.log(nombrePasajero);


//Númerico
let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;              
//Lógicos (true, false)
let boletoActivo = true;
var gestionAgencia = 100;

//Operaciones aritméticas
//Suma
//let totalBoletos = valorBoleto + valorBoleto*tasaEmbarque + gestionAgencia;

//Orden de precedencia
let totalBoletos = (valorBoleto + impuestoAeropuerto)+(valorBoleto + impuestoAeropuerto)*porcentajeTasaEmbarque + gestionAgencia;

console.log(totalBoletos);

//Concatenación de texto
let nombrePasajero = "Leonardo";
let apellido = "La cruz";

let nombreCompleto = nombrePasajero + apellido;
let pasaporte = parseFloat('1000') + parseInt('12');
let multiplicacion = parseInt('1000') / parseFloat('10');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let noEsUnNumero = parseInt('AASASA');
console.log(noEsUnNumero);
