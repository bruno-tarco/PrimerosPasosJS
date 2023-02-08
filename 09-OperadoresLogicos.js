const valorPasaje = 1000;

if(valorPasaje === 1000){
    console.log('El pasaje vale 1000')
}


//Operadores de compración

const ciudadDestino = "Santiago";
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

//Palabra reservada if
//Evalua la condición


//Operadores lógicos
//Y(AND)     O (OR)    NO(NOT)
//AND = &&  - Se deben cumplir las 2 condicionese
//OR = ||   - Se debe cumplir una condición al menos
//NOT = !   - No se cumple la condición
let edadPasajero = 17;
let estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);


if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || estaAcompanado)) {
    console.log('Pasaje disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas');
}

edadPasajero = 17;
estaAcompanado = true;

//Aplicando lógica negativa
if (!((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || estaAcompanado))) {
    console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas');
} else {
    console.log('Pasaje disponible para venta');
}

