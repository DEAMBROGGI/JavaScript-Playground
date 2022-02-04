
//VARIABLES GLOBALES
var counterVal = 0 //Defino una variable GLOBAL
var fontSize = 110 //Defino una variable GLOBAL numerica para modificar el tamaño de fuente
var presionoReset = false //Creo la variable presionoResest y se asigno un varol o estado inicial (state) de false
var presionoMas = false    //Creo la variable inicial presionoMas y le asigno un valor o estado inicial (state) de false
var presionoMenos = false
//CAPTURA DE ELEMENTOS DESDE HTML
var btnReset = document.getElementById("btn-reset") //Defino una variable GLOBAL, que contiene el vinculo con un elemento de html cuyo Id es btn-reset
var btnRestar = document.getElementById("btn-menos") //Defino una variable GLOBAL, que contiene el vinculo con un elemento html cuyo Id es btn-menos
var counter = document.querySelector("#count > h1") //Utilizo un metodo alternativo a getElementById, es es querySelector, 
                                                   //y nos permite vincular elementos html con JS de un modo similar al que lo realiza css
var inicio = document.querySelector(".inicio") //Creo la variable inicio y guardo en ella el elemento HTML cuya class es "inicio"
const accion = document.querySelector(".accion") //Creo la variable accion y guardo en ella el elemento HTML cuya class es "accion"

//FUNCIONES
function incrementClick() { //Creo la funcion para incrementar
    console.log(accion)
    val = counterVal +1 //Creo una variable LOCAL y le sumo 1
    counterVal = val //A la variable GLOBAL counterVal le asigno su nuevo valor igual a la variable LOCAL val
    fontSize=fontSize +10 //A la variable GLOBAL fontSize le modifico su valor sumandole 10
    counter.style.fontSize = fontSize+"px" //Modifico el estilo de fuente del elemento HTML, y al valor numerico de la variable GLOBAL fontSize le concateno el texto "px" para que sea interpretado como estilo de fontSize
    accion.innerHTML ="Ultima Accion: SUMASTE"
    
    presionoMas = true //Modifico a false es valor o estado (state) del la variable presionoMas
    updateDisplay(val); //Llamo a la funcion updateDisplay y le paso como parametro la variable LOCAL val
    console.log(accion)
}//Cierre de la funcion incrementClick

function decrementClick(event) { //Creo la funcion para decrementar
    
    val = counterVal -1 //Creo una variable LOCAL y le resto 1
    counterVal = val //A la variable GLOBAL counterVal le asigno su nuevo valor igual a la variable LOCAL val
    fontSize=fontSize -10 //A la variable GLOBAL fontSize le modifico su varor restandole 10
    counter.style.fontSize = fontSize+"px" //Modifico el estilo de fuente del elemento HTML, y al valor numerico de la variable GLOBAL fontSize le concateno el texto "px" para que sea interpretado como estilo de fontSize
    accion.innerHTML ="Ultima Accion: RESTASTE"
    presionoMenos = true
    updateDisplay(val); //Llamo a la funcion updateDisplay y le paso como parametro la variable LOCAL val  
}//Cierre de funcion decrementClick

function resetCounter() { //Creo la funcion para volver el contador a 0
    counterVal = 0; //Le asigno a la variable GLOBAL counterVal un valor de 0
    fontSize=110 // le asigno a la variable GLOBAL fontSize su valor a 110
    counter.style.fontSize = fontSize+"px" //Modifico el estilo de fuente del elemento HTML, y al valor numerico de la variable GLOBAL fontSize le concateno el texto "px" para que sea interpretado como estilo de fontSize
    accion.innerHTML="ULTIMA Accion: RESETEASTE"
    presionoReset = true //Modifico a false es valor o estado (state) del la variable presionoReset
    updateDisplay(counterVal); //Llamo a la funcion updateDisplay y le paso como parametro la variable CounterVal 
}//Cierre de la funcion resetCounter

function updateDisplay(val) { //Creo la funcion que se va a ocupar de actualizar la vista del contador en el HTML
    counter.innerHTML = val;  //Busco un elemento de html por su ID y le paso con 
                              //innerHTML el valor recibido commo parametro desde las otras funciones (incrementClick)

//CREO UN CONDICIAL DE TRES VERIFICACIONES UTILIZANDO OPERADORES DE MAYOR Y MENOR
    if(counterVal > 0 && counterVal < 10){ //Defino un condicional en el cual se tiene que cumplir dos condiciones para que este sea true median el operador &&
        counter.style.color = "lightgreen" //Cambio el estilo de color del elemento html 
           
    
    }else if(counterVal >= 10){  //Si la variable GLOBAL counterVal es mayor que 0, este conficional sera true de lo contrario sera false
        counter.style.color = "green" //Modifico el estilo de color del elemento HTML a green si el condicional es TRUE
        if(fontSize > 420){ //CREO UN NUEVO CONDICIONAL ANIDADO DENTRO DE LA PRIMER VERIFICACION SI ESTA ES TRUE, Verifico si el tamañp de la variable GLOBAL fontSize es mayor que 420
            alert("Cuidado tu texto desaparecera") //Emito un alert en caso de que este condicional sea TRUE
         }
    }else if(counterVal < 0 && counterVal > -5){//Si la variable GLOBAL CounterVal es menor que 0 y mayor que -5
        counter.style.color ="orange" //Modifico el estilo de color del elemento HTML a red
    }

    else if (counterVal <=-5) {//Si la variable GLOBAL counterVal en menor 0 igual que -5, este condicional sera true de lo contrario es false
        counter.style.color ="red" //Modifico el estilo de color del elemento HTML a red
        if(fontSize < 10){ //CREO UN NUEVO CONDICIONAL ANIDADO DENTRO DE LA PRIMER VERIFICACION SI ESTA ES TRUE, Verifico si el tamañp de la variable GLOBAL fontSize es mayor que 420
            alert("Cuidado tu texto se saldra de su contenedor") //Emito un alert en caso de que este condicional sea TRUE
         }
    } else {counter.style.color ="black"}//si ninguna de las condiciones anteriores se cumple entonces el estilo de color del elemento HTML sera black
    
     if(presionoMenos == true || presionoReset == true || presionoMas == true){//Defino un condicional en el cual se tiene que cumplir una de las dos condiciones para que este se vuela true
        inicio.style.visibility= "visible" //Cambio el estilo de visibilidad del elemento html a visible
       }
       //SI USAMOS ESTE CONDICIONAL GENERA UN AERROR EN LA VISTA DEL USUARIO EJ: SI EL CONTADOR ESTA EN UN NUMERO POSITIVO Y RESTA LE SIGUE INDICANDO QUE ESTA SUMANDO
    /* if(counterVal !== 0 && counterVal > val){//Defino un condicional en el cual se de deben cumplir las dos condiciones para quye este se vuelva true, la primera condicion el contador debe ser DIFERENTE a 0
         accion.innerHTML ="ESTAS SUMANDO"   //Agrego al elemento HTML un texto mediante su propiedad inerHTML
     }else if(counterVal !== 0 && counterVal < val){
         accion.innerHTML ="ESTAS RESTANDO"
     }else{accion.innerHTML="ESTAS EN CERO"} */

 }//Cierre de funcion updateDisplay

//ESCUCHADORES DE EVENTOS
btnReset.addEventListener("click",resetCounter) //A la variable GLOBAL btnReset le agrego un escuchador de eventos "click"
                                                // y cuando escucha ese evento le pido que llame a la funcion resetCounter
btnRestar.addEventListener("click",decrementClick)//A la variable GLOBAL btnRestar le agrego un escuchador de eventos "click"
                                                 // y cuando escucha ese evento le pido que llame a la funcion decrementClock 


