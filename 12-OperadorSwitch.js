const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");
const ciudadDestino = "Lima";

let valorPasaje = 0;
console.log(`Verificando pasajes para ${ciudadDestino}`);


    switch (ciudadDestino) {
        case "Bogotá":
            valorPasaje = 500;
            break
        case "Lima":
            valorPasaje = 400;
            break
        case "Santiago":
            valorPasaje = 300;
            break
        case "Montevideo":
            valorPasaje = 200;
            break
        default:
            console.log(`No hay pasajes para la ciudad indicada`)
            break

    }
    if(valorPasaje >0){
    console.log(`El valor del pasaje es: ${valorPasaje}`);
    }