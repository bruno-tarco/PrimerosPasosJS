const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");
const precioCiudad= new Array(500,400,380,200);
const datos =[ 
    {
        "ciudad": "Bogotá",
        "precio": 500
    },
    
    {
        "ciudad": "Lima",
        "precio": 400
    },

    {
        "ciudad": "Santiago",
        "precio": 380
    },

    {
        "ciudad": "Montevideo",
        "precio": 200
    },
];

const presupuestoDisponible = 400;
let ciudadSeleccionada = "";


let i = 0;

//While... 0 o más veces
//Do while, 1 o más veces


do{ 
    if(datos[i].precio <= presupuestoDisponible){   
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
    else{
    i++;
    }

}while(i <datos.length  &&  ciudadSeleccionada == "")


if(ciudadSeleccionada == ""){
    console.log("No tenemos pasajes disponibles");
}   else{
console.log("Puedes comprar pasaje para: "+ ciudadSeleccionada);
}