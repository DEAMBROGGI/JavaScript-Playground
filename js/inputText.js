
//CAPTURO LOS ELEMENTOS HTML
var nombreGuardado = ""
var apellidoGuardado =""
var direccionGuardad =""

//Para el input con keyup
var inputText = document.querySelector("#ingresoTexto") //Defino una variable GLOBAL, que contiene el vinculo con un elemento de html por ID
var resultado = document.querySelector("#resultado") //Defino una variable GLOBAL, que contiene el vinculo con un elemento de html por ID
//Para el nombre
var inputNombre = document.querySelector("#ingresoNombre")//Defino una variable GLOBAL y guardo el enlace con el elemento html cuyo ID es ingresoNombre
var alertaNombre = document.querySelector("#alertaNombre")//Defino una variable GLOBAL y guardo el enlace con el elemento html cuyo ID es alertaNombre
var nombre = document.querySelector("#nombre") //Defino una variable GLOBAL y guardo el enlace con el elemento html cuyo ID es nombre
//Para el apellido
var inputApellido = document.querySelector("#ingresoApellido")
var alertaApellido = document.querySelector("#alertaApellido")
var apellido = document.querySelector("#apellido")
//Para la direccion
var inputDireccion = document.querySelector('#ingresoDireccion')
var alertaDireccion = document.querySelector('#alertaDireccion')
var direccion = document.querySelector('#direccion')

//DEFINO LAS FUNCIONES
function captureText(event){ //Creo la funcion capturText esta posee como parametro event, el cuan el tomado desde el escuchador de evento en linea 48
var val = event.target.value //Creo la variable LOCAL val y esta guardo del evento su propiedad target y de esta su propiedad value

//--TRANSFORMO EL TEXTO OBTENIDO Y GUARDADO EN VAL DESCOMPONIENDO EN DOS VARIABLE Y VOLVIENDOLAS A UNIR PARA DARLE EL FORMATO QUE NECESITO------------------------------------
var primerLetraEnMayuscula = val.charAt(0).toUpperCase(); //Creo la variable primerLetraEnMayuscula a esta la igualo a val y  
                                                          //le aplico dos METODOS .charAt(0) el cual toma la primer POSICION de val, es decir la primer letra
                                                          //y acto seguido le aplico el metodo .toUpperCase() el cual la trasforma en mayuscula 
                                   
var elRestoDeLasLetrasEnMinuscula = val.slice(1).toLowerCase() //Creo la variable elRestoDeLasLetrasEnMinuscula y la igualo a val y
                                                               //Le aplico el metodo .slice(1), para eliminar la primer letra ya que ya la tengo guardad en primerLetraEnMayuscula
                                                               //Le aplico el metodo .toLowerCase() para pasar todo el texto a miniscula

var correctText =primerLetraEnMayuscula+elRestoDeLasLetrasEnMinuscula //Creo la variable correctText y le doy como valos las dos variables creadas anteriormente concatenadas, es decir unidas mediante el +
console.log(elRestoDeLasLetrasEnMinuscula)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
resultado.innerHTML = correctText //Imprimo en el HTLM mediante la propiedad innerHTML seleccionado en la linea 5

//TEXTO SIN DESGLOSARLO EN VARIABLES
//resultado.innerHTML = event.target.value.charAt(0).toUpperCase()+event.target.value.slice(1).toLowerCase();

}//Cierro la funcion captureText


function captureName(event){//DEFINO LA FUNCION PARA TRABAJAR CON EL INPUT DEL NOMBRE

var val = event.target.value //Capturo el valor del evento

//GUARDAMOS inicialmente nuestra variable val en otra variable en la cual le vamos a limpiar los espacios en blanco ver metodos de limpiarEspacios y limpiarEspacios2


//METODO CONVINANDO LOS METODOD DE SPLIT y JOIN
var limpiarEspacios2 = val.split(" ") // Este metodo va a separar el texto (string), string por el separador que le indiquemos, es decir nos va a devolver lo que este entre espacios en blanco 
                          .join("")   // Este metodo va a volver a unir nuestro texto con el separador que le indiquemos, en este caso ningun separador
console.log(limpiarEspacios2)

//UNA VEZ QUITADOS LOS ESPACIOS EN BLANCO APLICAMOS LOS METODOS VISTOS ANTERIORMENTE PARA PASAR LA PRIMER LETRA A MAYUSCULA Y LAS RESTANTES A MINUSCULAS
//Vean que aqui estoy utilizando el metodo con split() y join() ya que llamo a la variable limpiarEspacios2 el metodo raplace() es a modo de muestra

var correctName = limpiarEspacios2.charAt(0) // a la variable ya sin espacios en blancos le aplico el metodo charAt(0)para separar la primer posicion es decir la primer letra
                                  .toUpperCase() + //le aplico el metodo toUpperCase(), para pasar la primer obtenida anteriormente a Mayuscula y con el mas le indico que lo va a concatenar con lo que sigue
                                  limpiarEspacios2.slice(1) //a la variable ya sin espacios en blanco le elimino el primer caracter con el metodo slice(1) 
                                  .toLowerCase(); //El resultado de lo anterio lo paso a minuscula con el metodo toLowerCase
    
//DEFINO UN BLOQUE DE CONDICIONALES CON UN IF Y ELSE
if(val.length < 3){ //Toma la el largo o la cantidad de caracteres que contiene el texto y si es menor que tres realizo las acciones establecidas en este condicional
    alertaNombre.innerHTML = "Debes ingresar como minimo 4 caracteres" //imprimo en el elemento tomado y guardado en la variable alertaNombre
    alertaNombre.style.color = "red"  //le cambio el color a ese elemento mediante su propiedad style
}//Cierre de if

else { //Si no pasa lo establecido en el condicional anterior imprimo en pantalla la "Tu nombre es" mas el nombre ingresado en el input
    nombre.innerHTML = "Tu nombre es "+correctName 
}//Cierre de else

}//Cierre de la funcion captureName



function captureSurnameOrAddress(event){ //Definos la funcion encargada de operar y generar los datos para os appelidos y direcciones
    var val = event.target.value //Capturamos el valor ingresado en el input
    var id = event.target.id     //Capturamos el id del input que disparo el evento

        var limpiarEspaciosYseparar = val  //Definimos una funcion que va a tomar el valor en bruto del evento y le va a dar un primer formato
                                         .trim() //Eliminamos espacios en blanco al inicio y al final de la cadena (string)
                                         .toLowerCase() //Pasamos todo el texto a minuscula
                                         .split(" ")  //Separamos el texto en palabras que se encuentran separadas entre espacios

        console.log(limpiarEspaciosYseparar)
        var limpiarEspaciosEntreEspacios = limpiarEspaciosYseparar.filter(Boolean) //A la variable creada anteriormente donde le dimos un primer formato, le aplicamos un filtro, y lo que vamos a buscar son Boolenos que den true, esto no va a eliminar los string vacios que se crearon anteriormente VER Console.log de linea 89

        console.log(limpiarEspaciosEntreEspacios)
       
        var formatoAcadaPalabra = limpiarEspaciosEntreEspacios.map( palabras => palabras[0].toUpperCase() + palabras.substr(1) )
        //Al resultado obtenido en la variable anterior le aplico el el metodo map, el cual se va a ocupar de pasar por cada una de ellas y asiganle el formato que yo le defino, en este caso va a tomar la primer posicion [0], y la va a pasar a mayuscula y luego lo va a concatenar con lo que obtenga del metodo substr, el cual captura o guarda del texto lo que le indiquemos en es caso desde la segunda letra en adelante, sin tener el cuanta la primera substr(1)
        console.log(formatoAcadaPalabra)
        var datoCorrecto = formatoAcadaPalabra.join(' '); //Una vez que tengo ya todas las palabras vuelvo a crear una cadena(string) uniendolas todas con el metodo join, al cual le pido que las una con un espacio de separacion ya que le paso como parametro un espacio join(' ') --RECUERDEN QUE EL ESPACIO TAMBIEN ES UN CARACTER

        //CON LOS PASOS ANTERIORES PODEMOS DARLE FORMATO AL TEXTO TANTO DEL APELLIDO COMO DE LA DIRECCION SIN INPORTAT LA CANTIDAD DE PALABRAS QUE CONTENGAN

        //METODO PARA ENCONTRAR NUMEROS YA QUE LAS DIRECCIONES REQUIEREN NUMEROS Y TENEMOS QUE VERIFICAR QUE SE TRATE DE UNA DIRECCION 
        var buscarNumeros = val //Creamos una variable yu le asignamos como valor la variable val (la cual no trae lo que el usuario ingreso en el input)
                            .trim()  //Le quitamos los espacios en blanco de inicio y fin
                            .split("") //le aplicamos split y le pasamos a este como parametro un string vacio "" (RECUERDEN QUE VACIO NO ES LO MISMO QUE CON UN ESPACIO, EL ESPACIO ES UN CARACTER), esto va a generar que al no tener un indicador de separacion como por ejemplo, espacio, coma u otro valor, va a separar el string letra por letra, para ver este resultado comenten la linea 106 y el console.log en linea 108 les mostrara el resultado
                            .filter(Number)//Le aplico un filtro al cual le pido que me devuelva unicamente los valores numericos, vuelve a habilitar la linea 106 y compara las consultas de console.log anterior

        console.log(buscarNumeros)
        
        //Defino un bloque de condicional el cual va a identificar desde que input le estoy pasando valor, si es desde el nombre o desde la direccion
        //----------------------BLOQUE DE CONDICIONALES PARA ESTABLECER EL ID DE ORIGEN---------------------------------------
        if(id == "ingresoApellido"){ //Verifico primero si el evento proviene del input de apellido
            //----------------------BLOQUE DE CONDICIONALES ANIDADOS EN PRIMER IF---------------------------------------
            if(datoCorrecto.length > 4){//Verifico si contiene mas de 4 caracteres
            alertaApellido.innerHTML = "" //Limpio la alerta de apellido, por ejemplo para que desaparezca en caso de que anteriormente lo ingreso incorrectamente
            apellido.innerHTML = "Tu apellido es "+datoCorrecto //imprimo en el HTML la frace mas el apellido con el apellido ya formateado en los pasos anteriores
            apellidoGuardado = datoCorrecto //Guardo el apellido ya formateado en un variable global en caso de que la necesite
            }else{ //Si no tiene 4 caracteres
                apellido.innerHTML = "" //Limpie el elemento apellido
                alertaApellido.innerHTML = "Debe incluir al menos 4 caracteres" //Emita alerta en texto en el HTML
                alertaApellido.style.color = "red" //Le cambio el color a rojo
            }
            //--------------------FIN BLOQUE DE CONDICIONALES ANIDADO1---------------------------------------------------------------------

        }else if(id == "ingresoDireccion" ){ //Verifico si el evento proviene del input de Direccion
           
            //--------------------BLOQUE DE CONDICIONALES ANIDADOS  LO LLAMAREMOS ANIDADO1 PARA IDENTIFICARLO-------------------- 
            if(datoCorrecto.length > 5){ //Verifico que primero que contenga mas de 5 caracteres
                alertaDireccion.innerHTML="" //Borro lo que tenga contenido de la alerta en el caso que anteriormente lo ingrese incorrectamente
                
                //---------------BLOQUE DE CONDICIONALES ANIDADOS  LO LLAMAREMOS ANIDADO2 PARA IDENTIFICARLO------------------------
                if(buscarNumeros.length > 0){ //Una vez que verifico que tiene mas de 5 caracteres y se encuentra en este blocke, le pido que verifique si contiene numeros mediante la longitud que posee la variable declarada en linea 103
                alertaDireccion.innerHTML=""//Una vez verificado va a borar el texto de la alerta de direcciones incorrectas
                direccion.innerHTML = "Tu direccion es "+datoCorrecto//va a imprimir el valor correcto y ya con el dormato que definimos anteriormente
                direccionGuardad = datoCorrecto //Guardo la direccion con el formato correcto en caso de que la necesite posteriormente
                }else{ //Si no posee numeros la direccion
                    direccion.innerHTML = "" //borro lo que contenga el campo direccion
                    alertaDireccion.innerHTML = "Debes incluir tu numero de puerta" //Emito alerta referente a verificacion de numeros
                    alertaDireccion.style.color = "red" //Le cambio el color a rojo
                }//Cierro el ultimo els
                //--------------------FIN BLOQUE DE CONDICIONALES ANIDADO2---------------------------------------------------------------------

            }else{//Si no posee 5 caracteres
             
                alertaDireccion.innerHTML = "Debes incluir al menos 5 caracteres" //Imprimo alerta sobre cantidad de caracteres
                alertaDireccion.style.color = "red" //Le cambio el color a rojo
            } //Cierre de else
            //--------------------FIN BLOQUE DE CONDICIONALES ANIDADO1---------------------------------------------------------------------

        }//Cierro else if de linea 124
        //----------------------FIN BLOQUE DE CONDICIONALES PARA ESTABLECER EL ID DE ORIGEN---------------------------------------

        
    }//Cierre funcion CaptureSurname

//ESCUCHO LOS EVENTOS
inputText.addEventListener("keyup", captureText)  // keyup se dispara cada vez que el usuario suelta una tecla de escritura en el teclado
inputNombre.addEventListener("change",captureName) //change se dispara en el caso de los inputs una vez que el usuario presiona enter o saca el cursor del elemento, por ejemplo realizando una tabulacion o haciendo click afuera
inputApellido.addEventListener("change",captureSurnameOrAddress) //Escucho el evento change desde el input de apellido y se lo paso a la funcion
inputDireccion.addEventListener("change",captureSurnameOrAddress)//Escucho el evento change desde el input de apellido y se lo paso a la funcion


//Ejercicios para ordenar strings

// cadena ordenada desc
// cadena invertida
// cadena ordenada asc
var cadena = "Deambroggi"
console.log(cadena.split("").filter(letras =>letras !== " ").sort((a, b) => a.localeCompare(b)).join(''))
console.log(cadena.split("").filter(letras =>letras !== " ").reverse((a, b) => a.localeCompare(b)).join(''))
console.log(cadena.split("").filter(letras =>letras !== " ").sort((a, b) => a.localeCompare(b)).reverse().join(''))



