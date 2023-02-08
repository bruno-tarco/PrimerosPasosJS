//Palabra const
//Espacio de memoria que luego de asigna su valor , no cambia en el tiempo
const valorPasaje = 1650;

console.log(valorPasaje);

let nombrePasajero = "Leonardo";
let apellidoPasajero = "Lacruz";

console.log(nombrePasajero);
console.log(apellidoPasajero);


//Palabra var
//Espacio de memoria que pueda cambiar durante la ejeción
//El alcance de var se va  a la parte principal dele programa
// en cambio let solo queda disponible dentro de un bloque

//Bloque
{
    //Palabra let
    //Espacio de memoria que pueda cambiar durante la ejeción del programa, bloque en el que puede actuar let, pero afuera ya no 
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("variable con let: "+nombreCompletoPasajero)
    console.log("Variable con var: "+nombreCompletoPasajero)
}
console.log("variable con let: "+nombreCompletoPasajero)
console.log("Variable con var: "+nombreCompletoPasajero)

