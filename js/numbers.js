
//Guardo el vinculo con los elementos HTML en variables
var inputNumbers = document.querySelector("#ingresoNumero") 
var resultSuma = document.querySelector('#suma')
var resultResta = document.querySelector('#resta')
var resultMultiplicacion = document.querySelector('#multiplicacion')
var resultDivision = document.querySelector('#division')
var resultMayor = document.querySelector('#mayor')
var resultMenor = document.querySelector('#menor')
var resultOdenadosDes= document.querySelector('#ordenadosDes')
var resultOrdenadosAsc=document.querySelector("#ordenadosAsc")


function operaciones(event){//Defino una funcion que para realizar las operacion provenientes del input
    var val = event.target.value //Capturo el valor proveniente del input
    
    var separo = val.split(",") //Separo lo ingresado en el input por comas
    console.log(separo)

    var anumero = separo.map(numero => Number(numero)) //Mediante map recorro cada numero y los trasformo de string a numero uno a uno utilizando el Number 

    console.log(anumero)
    soloPrimerNumero = anumero[0]//Para que el resultado sea el esperado, es decir que se realice la operaciones entre los numeros ingresados en el input, separo el primer elemento del tao ingresado y lo coloco como varo inicial en cada una de las operaciones
    var suma = soloPrimerNumero //Asigno el primer Numero como valor inicial
    var resta = soloPrimerNumero //Asigno el primer numero como varor inicial
    var multiplicar = soloPrimerNumero //Adigno el primer numero como valor inicial 

    var dividir = soloPrimerNumero //Asigno el primer elemento como valor inicial
    
    //Comparen el resultado que se va generando en los console,log de linea anteriores para ver como se va trasformando
    var quitarPrimerElemento = anumero.slice(1) //Defino una variable con sin el primer elemento para realizar operqciones
    console.log(quitarPrimerElemento)

    console.log(anumero)

    quitarPrimerElemento.forEach(numero =>{//Una vez que estan ya en numeros y con estos puedo realizar operaciones matematicas, mediante forEach un metodo similar a map pero con propiedades adicionales recorremos cada uno de los numeros para realiuzar las operaciones
        suma = suma + numero // Establecemos una suma, en donde la primer palabra suma = representa que lo que continue luego del igual el es valor que le enviaremos a la variable global definida en linea 13, la segunda vez que nombramos a suma es para capturar su valor es decir inicialmente 0 y le sumamos cada uno de los numeros a medida que se recorren con forEach
        resta = resta - numero //Es la misma logica que con suma pero otra operacion en este caso resta
        multiplicar = multiplicar * numero //Es la misma logica que con suma pero otra operacion en este caso multiplicacion
        
        
        dividir  /=  numero //Es la misma logica que las anteriores pero otra operacion en este caso division
        
        
    }); //cierro forEach
    
    var min = Math.min(...anumero) //Utilizo un Metodo Matematico ya preestablecido para buscar dentro del arreglo el valor minimo (...anumero) busca dentro del arreglo y no sobre el arreglo
    var max = Math.max(...anumero) //Misma logica anterior pero con mayor numero
    



    //Imprimo los resultados de acuerdo a cada operacion en los diferentes elementos HTML
    resultSuma.innerHTML = "sumados "+suma
    resultResta.innerHTML = "restados "+resta
    resultMultiplicacion.innerHTML = "multiplicados "+multiplicar
    resultDivision.innerHTML = "divididos "+dividir
    resultMenor.innerHTML = "el menor " +min
    resultMayor.innerHTML = "el mayor " +max
    resultOdenadosDes.innerHTML = "descendentes " +anumero.sort(function(a, b){return a - b}) //utilizo metodo sort, para ordenar los datos descendiente, ya que es los ordena alfabeticamente, le paso una funcion basica de ordenamiento para que los ordene por su valor numerico
    resultOrdenadosAsc.innerHTML= "ascendentes " +anumero.sort(function(a, b){return b - a}) //Al invertir el orden de la funcion de a-b por b-a invierto el ordenamiento a ascendente
    
}

inputNumbers.addEventListener("change",operaciones) //Capturo el evento change del input







