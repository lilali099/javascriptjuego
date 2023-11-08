//contiene respuestas correctas//
let correctas = [3,2,1,3];
//contiene respuestas del usuario//
let opcion_elegida= [];

let cantidad_correctas= 0;

//función que toma el número de pregunta y el input elegido de esa pregunta//

function respuesta(num_pregunta, seleccionada){
    //guardo la respuesta elegida//
    opcion_elegida[ num_pregunta]= seleccionada.value; 

//es para que se ponga color blanco cuando elige otra opción//
    //armo id para seleccionar el section correspondiente//

    id="p"+ num_pregunta;
    labels= document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white"

//ingreso color de label seleccionado//
seleccionada.parentNode.style.backgroundColor= "#cb7676";
}
//función para comparar los arreglos para saber cuantas se respondieron correctamente//
function corregir () {
cantidad_correctas =0
for(i=0; i< correctas.length;i++){ if(correctas[i]==opcion_elegida[i]){
    cantidad_correctas++;
}
}
document.getElementById("resultado").innerHTML= cantidad_correctas;
}
