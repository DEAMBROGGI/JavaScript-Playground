//OBJETO
var objetos = {}
var pais ={ //Creamos un objeto dentro de nuestra variables paises y definimos sus propiedades (name, capital, continent, etc)
           name:"Argentina",
           capital:"Buenos Aires",
           continent:"South America",
           currency:"Argentine peso",
           poblacion:45376763,
           bandera:"https://flagcdn.com/ar.svg",
           area:2780400,
           
        }

        
//console.log(pais)

pais.currency.name = "peso" //Cambiamos el valor de una propiedad accidiendo a la ruta de la propiedad con puntos

//console.log(pais)

pais.provincias = 24    //Agregar una propiedad

//console.log(pais)

delete pais.provincias //Elimino una propiedad

//console.log(pais)

// El constructor JSON y su metodo stringify, nos permite visializar datos de JSON (como por ejemplo la variable paises)
// en nuestro navegador se le pueden pasar tres parametros stringifi(parametro1,parametro2, parametro3)
// parametro1, le pasamos el objeto o variable que queremos visualizar en este caso la variable pais
// parametro2, le pasamos las propiedades que queremos visualizar, si queremos ver todo le pasamos undefined
// parametro3, le pasamos la visualizacion, 0 es sin formato texto en una sola linea de uno en adelante mejora la lectura y le va aumentando el margen izquierdo 
var enHTML = document.getElementById("imprimir").innerHTML  =  JSON.stringify(pais,["name","poblacion"],2) //Mostrar en html

//El constructor JSON y su metodo parse hace el proceso inverso a stringifi convierte el testo plano y lo guarda en un contenedor en este caso la variable consulta 
var consulta = JSON.parse(enHTML) //Tranformo la consulta antrerior y la guardo en una variable

//console.log(consulta)

//PARA TENER EN CUENTA
// Si igualo una nueva variable al objeto pais creo una referencia, es decir si modifico data tambien modifico pais
// para crear un objeto nuevo sin referencia deben convinar los metodos de JSON  var data = JSON.parse(JSON.stringify(pais))
var data = pais
data.name = "Arg"

//console.log(pais)
//console.log(data)

//ARRAYS
var strings = ["a","b","c"] //Array de texto
var numeros = [3,5,9,12]    //Array de numeros

//Array de objetos
var arrayPaises = [ //Creo mi variable arrayPaises el cual contiene un array de objetos
                    {name:"Paraguay",
                    capital:"Asunción",
                    continent:"South America",
                    currency:"Paraguayan guaraní",
                    poblacion:7132530,
                    bandera:"https://flagcdn.com/py.svg",
                    area:406752
                    }, //Cada Objeto se separa con coma

                    {name:"Bolivia",
                    capital:"Sucre",
                    continent:"South America",
                    currency:"Bolivian boliviano",
                    poblacion:11673029,
                    bandera:"https://flagcdn.com/bo.svg",
                    area:1098581
                    },

                    {name:"Venezuela",
                    capital:"Caracas",
                    continent:"South America",
                    currency:"Venezuelan bolívar soberano",
                    poblacion:28435943,
                    bandera:"https://flagcdn.com/ve.svg",
                    area:916445
                    },
                    ]

console.log(arrayPaises)
// Si yo conozco la posicion (indice) del objeto dentro del array, recuerden que las posiciones comienzan en 0

var copiaPaises = JSON.parse(JSON.stringify(arrayPaises)) //Copia nueva no referencida el array sin vinculo

function cambiarPropArray(){
    var cambiarProp = copiaPaises
    cambiarProp[0].currency="guarani" //Modifico el primer elemento del array posicion 0 en su propiedad currency y le cambio su valor
    document.getElementById("imprimirARRAY").innerHTML = JSON.stringify(cambiarProp,undefined,2) //Mostrar en html
    console.log(arrayPaises)
}
//Para visualizar su resultado llama a la funcion

function addPropArray(){
    var addProp= copiaPaises
    addProp[0].provincias = 13 //Para agregar una propiedad si esta no existe simplemente la agrego a continuacion del objeto, en este caso el primero y le doy un valor    document.getElementById("imprimirARRAY").innerHTML = JSON.stringify(addProp,undefined,2) //Mostrar en html
    console.log(arrayPaises)
    
}
//Para visualizar su resultado llama a la funcion

function deleteObject(){
var deleteObjeto = copiaPaises

deleteObjeto.splice(2,1) //Para eliminar un objeto si no conozco la posicion al metodo splice le paso dos parametros splice(parametro1, parametro2)
//parametro1, es la posicion del objeto
//parametro2, la cantidad de elemento que quiero eliminar desde la posicion seleccionada
document.getElementById("imprimirARRAY").innerHTML = JSON.stringify(deleteObjeto,undefined,2) //Mostrar en html
console.log(arrayPaises)
}
//Para visualizar su resultado llama a la funcion

//Si no conozco la posicion del obeto a modificar o eliminar

function filter(){
    copiaPaises.push(pais) //Con el metodo push agrego nuevos elementos al array seleccionado en este caso a copiaArray le agrego el objeto que creamos en las primeras lineas pais
    // En caso de que el objeto a agregar sea un ottro array y no lo queremos asi y queremos solo los objetos que contiene
    // Debemos utilizar el metodo de este modo copiaPaises.push(...arrayconobjetos)
    console.log(copiaPaises)

    //El metodo for es un metodo basico de js que nos permite recorre un objeto mediante un ciclo, el cual verifica objeto por objeto
    // En este caso al vario inicial del ciclo le asignamos la variable i con un valor inicial de 0
    //El ciclo recoirre el array mientras este sea menor que i (i < copiaPaises.length) y va incrementando en uno a i por cada pasada i++
 var filtro=[]
    for (var i = 0; i < copiaPaises.length; i++) {
        //Por cada objeto que recorra va va verificando la condicion y si cumple la condicion establecida en el if 
        //Los va enviando mediante el metodo push al array definido anteriormente en la variable filtro
        if( copiaPaises[i].name == "Arg"){
            filtro.push(copiaPaises[i])
        }
       
    }
    document.getElementById("imprimirARRAY").innerHTML = JSON.stringify(filtro,undefined,2) 
}
//Para visualizar su resultado llama a la funcion

function filterConFilter(){
    copiaPaises.push(pais) //Agrego al array copiaPaises el objeto pais creado en la primeras lineas
    //var filtro =  copiaPaises.filter(pais => pais.capital != "Buenos Aires") 

    //En la variable filtro vamos a guardar el resultado del filtro con el metodo filter 
    //Vamos a verificar si la propiedad capital incluye c (metodo includes()) yb si (&&) la propiedad name incluye  e
    var filtro = copiaPaises.filter(pais => pais.capital.includes("c") || pais.name.includes("e"))

    document.getElementById("imprimirARRAY").innerHTML = JSON.stringify(filtro,undefined,2) 
    
}
//Para visualizar su resultado llama a la funcion

function addObject(){
    var addObjetos= copiaPaises
    
    arrayPaises.push(pais) //Agrego al array arrayPaises el objeto contenido en la variable pais
    document.getElementById("imprimirARRAY").innerHTML = JSON.stringify(addObjetos,undefined,2) //Mostrar en html
    console.log(arrayPaises)
    console.log(copiaPaises)
 
    
}   
//Para visualizar su resultado llama a la funcion

//FETCH DESDE LA API 

var data;
  
  var datosseleccionados = []
  var continents;
  
 /*async function getData(){
 await fetch("https://restcountries.com/v3.1/all")
     .then(response => response.json())
     .then(json => data = json)
     
    console.log(data)

    //BUSCAR CONTINENTES Y ELIMINAR REPETIDOS
     var unique = data.map(pais=>pais.continents[0] )
     const dataArray = new Set(unique)
     continents =[...dataArray]

     console.log(continents)

     //FILTRAR POR CONTINENTES
     var searchContinent=data.filter(continente => continente.continents.includes("Oceania"));
     console.log(searchContinent)
     searchContinent.map(pais =>{

     datosseleccionados.push(
        
        {name : pais.name.common,
        capital:pais.capital !== undefined ? pais.capital[0]:"Sin datos sobre capital",
        continent:pais.continents[0],
        currency:pais.currencies[Object.keys(pais.currencies)[0]].name,
        poblacion:pais.population,
        bandera:pais.flags.svg,
        area: pais.area
        }
    
     );

})

document.getElementById("imprimirARRAY").innerHTML = JSON.stringify(datosseleccionados,undefined,2) //Mostrar en html
console.log(datosseleccionados)

     
      }
      getData()*/

      var paises = []
      var checkboxSelected = []
      var textSearch = ""
      var SearchParametro = ""
      
      async function getData() {//la funcion getData es la encargada de recolectar el dato de nuestro archivo json, esta declarada asincrona (async), para poder determinarle el metodo await
          await fetch("../data/paises.json") //mediante el metodo fetch podes obtener la informacion datos en formato JSON, tanto desde carpetas locales como remotas (APIREST), se declara como await para detener la ejecucion del codigo hasta recibir la respuesta a la promesa realizada por el metodo fetch y asi continuar con el codigo ya con los datos necesarios
              .then(response => response.json())//La respuesta, recibida del metodo fecht es interpretada mediante el metodo json(), esta genera una nueva promersa 
              .then(json => paises.push(...json))//La respuesta a la promesa generada en la ultima linea es recibida y enviada a nuestra variable global paises mediante el metodo push
              
           //Llamamos a la funcion encaragada de mostrar nuestra nuestros cards en el html para que inicialize y realize el primer renderizado de nuestros cards
      console.log(paises)
      var area = paises.map(pais => pais.area)
      console.log(area)

      var min = Math.min(...area) //Utilizo un Metodo Matematico ya preestablecido para buscar dentro del arreglo el valor minimo (...anumero) busca dentro del arreglo y no sobre el arreglo
        var max = Math.max(...area)
        console.log(min)
        console.log(max)
      }     
          
      getData()//llamamos a la funcion getData para que sea inicializada    